"use client";
import React, { useState } from "react";
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
	const { logout } = useAuth();

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
					<div className="flex items-center gap-4">
						<span className="text-slate-300">{user.email}</span>
						<NavbarButton
							onClick={logout}
							className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
						>
							Sign Out
						</NavbarButton>
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
						<div className="space-y-2">
							<div className="text-slate-300 text-center">{user.email}</div>
							<NavbarButton
								variant="gradient"
								className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
								onClick={() => {
									logout();
									setIsOpen(false);
								}}
							>
								Sign Out
							</NavbarButton>
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
