"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavbarLogo,
	NavbarButton,
} from "./ui/resizable-navbar";

const Header = ({ isChatMode, onExitChat, onAuthClick, user }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { logout } = useAuth();
	const dropdownRef = useRef(null);

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

	const handleSignOut = async () => {
		try {
			await logout();
			setIsDropdownOpen(false);
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

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

	if (isChatMode) {
		return (
			<div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
				<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
					<Link to="/">
						<NavbarLogo />
					</Link>
					<NavbarButton
						onClick={onExitChat}
						className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
					>
						Exit Chat
					</NavbarButton>
				</div>
			</div>
		);
	}

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
						{isDropdownOpen && (
							<div className="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden bg-black/50 backdrop-blur-md border border-white/10 shadow-lg">
								<div className="py-1">
									<button
										onClick={handleSignOut}
										className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
									>
										Sign Out
									</button>
								</div>
							</div>
						)}
					</div>
				) : (
					<NavbarButton
						onClick={onAuthClick}
						className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
					>
						Sign In
					</NavbarButton>
				)}
			</NavBody>

			<MobileNav>
				<MobileNavHeader>
					<Link to="/">
						<NavbarLogo />
					</Link>
					<MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
				</MobileNavHeader>
				<MobileNavMenu isOpen={isOpen}>
					{navItems.map((item, index) => (
						<Link key={index} to={item.link}>
							<NavbarButton
								variant="secondary"
								className="w-full"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</NavbarButton>
						</Link>
					))}
					{user ? (
						<div className="flex items-center justify-center py-2">
							<button
								onClick={() => {
									handleSignOut();
									setIsOpen(false);
								}}
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
						</div>
					) : (
						<NavbarButton
							variant="gradient"
							className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
							onClick={() => {
								onAuthClick();
								setIsOpen(false);
							}}
						>
							Sign In
						</NavbarButton>
					)}
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
};

export default Header;
