"use client";
import React, { useState } from "react";
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

const Header = () => {
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

	return (
		<Navbar>
			{/* Desktop Navigation */}
			<NavBody>
				<NavbarLogo />
				<NavItems items={navItems} />
				<NavbarButton
					onClick={() => {}}
					className="bg-gradient-to-r from-blue-500 to-purple-500"
				>
					Login
				</NavbarButton>
			</NavBody>

			{/* Mobile Navigation */}
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
				</MobileNavHeader>
				<MobileNavMenu isOpen={isOpen}>
					{navItems.map((item, index) => (
						<NavbarButton
							key={index}
							href={item.link}
							variant="secondary"
							className="w-full"
							onClick={() => setIsOpen(false)}
						>
							{item.name}
						</NavbarButton>
					))}
					<NavbarButton
						href="/get-started"
						variant="gradient"
						className="w-full"
					>
						Get Started
					</NavbarButton>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
};

export default Header;
