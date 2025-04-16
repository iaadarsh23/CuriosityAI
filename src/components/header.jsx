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
				<Link to="/">
					<NavbarLogo />
				</Link>
				<NavItems items={navItems} />
				<Link to="/login">
					<NavbarButton className="bg-gradient-to-r from-blue-500 to-purple-500">
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
					<Link to="/get-started">
						<NavbarButton variant="gradient" className="w-full">
							Get Started
						</NavbarButton>
					</Link>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
};

export default Header;
