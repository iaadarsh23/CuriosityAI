import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import {
	Navbar,
	NavBody,
	NavItems,
	NavbarLogo,
	NavbarButton,
} from "./ui/resizable-navbar";

const NavbarComponent = ({ user }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleSignOut = async () => {
		try {
			await signOut(auth);
			setIsDropdownOpen(false);
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	// Handle click outside to close dropdown
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const navItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Features",
			link: "/features",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];

	return (
		<Navbar>
			<NavBody>
				<Link to="/">
					<NavbarLogo />
				</Link>
				<NavItems items={navItems} />
				{user ? (
					<div className="relative" ref={dropdownRef}>
						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-white/40 transition-all duration-200 focus:outline-none"
						>
							{user.photoURL ? (
								<img
									src={user.photoURL}
									alt="Profile"
									className="w-full h-full object-cover"
									referrerPolicy="no-referrer"
								/>
							) : (
								<div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-lg font-semibold">
									{user.email.charAt(0).toUpperCase()}
								</div>
							)}
						</button>
						<AnimatePresence>
							{isDropdownOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}
									className="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden bg-black/50 backdrop-blur-md border border-white/10"
								>
									<div className="py-1">
										<div className="px-4 py-2 text-sm text-white border-b border-white/10">
											{user.email}
										</div>
										<button
											onClick={handleSignOut}
											className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
										>
											Sign Out
										</button>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				) : (
					<NavbarButton
						onClick={() => (window.location.href = "/login")}
						className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
					>
						Sign In
					</NavbarButton>
				)}
			</NavBody>
		</Navbar>
	);
};

export default NavbarComponent;
