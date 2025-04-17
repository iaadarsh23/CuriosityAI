"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Header = ({ isChatMode, onExitChat }) => {
	const [isOpen, setIsOpen] = useState(false);

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
			{/* Desktop Navigation */}
			<NavBody>
				<Link to="/">
					<NavbarLogo />
				</Link>
				<NavItems items={navItems} />
				<Link to="/login">
					<NavbarButton className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
						Login
					</NavbarButton>
				</Link>
			</NavBody>

			{/* Mobile Navigation */}
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
					<Link to="/login">
						<NavbarButton
							variant="gradient"
							className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
							onClick={() => setIsOpen(false)}
						>
							Login
						</NavbarButton>
					</Link>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
};

export default Header;
