"use client";
import React, { useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
	motion as Motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import Button from "../button";

export const Navbar = ({ children, className }) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 100) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	});

	return (
		<Motion.div
			ref={ref}
			className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
		>
			{React.Children.map(children, (child) =>
				React.isValidElement(child)
					? React.cloneElement(child, { visible })
					: child
			)}
		</Motion.div>
	);
};

export const NavBody = ({ children, className, visible }) => {
	return (
		<Motion.div
			animate={{
				backdropFilter: visible ? "blur(10px)" : "none",
				boxShadow: visible
					? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
					: "none",
				width: visible ? "50%" : "100%",
				y: visible ? 10 : 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 50,
			}}
			className={cn(
				"relative z-[60] mx-auto w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-black/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-solid border-white/10 px-4 py-2 flex",
				visible && "bg-black/60",
				className
			)}
		>
			{children}
		</Motion.div>
	);
};

export const NavItems = ({ items, className, onItemClick }) => {
	const [hovered, setHovered] = useState(null);
	return (
		<Motion.div
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"absolute inset-0 hidden md:flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-300",
				className
			)}
		>
			{items.map((item, idx) => (
				<Link
					key={`link-${idx}`}
					to={item.link}
					onMouseEnter={() => setHovered(idx)}
					onClick={onItemClick}
					className="relative px-4 py-2 text-white hover:text-black"
				>
					{hovered === idx && (
						<Motion.div
							layoutId="hovered"
							className="absolute inset-0 h-full w-full rounded-full bg-white"
						/>
					)}
					<span className="relative z-20">{item.name}</span>
				</Link>
			))}
		</Motion.div>
	);
};

export const MobileNav = ({ children, className, visible }) => {
	return (
		<Motion.div
			animate={{
				backdropFilter: visible ? "blur(10px)" : "none",
				boxShadow: visible
					? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
					: "none",
				width: visible ? "90%" : "100%",
				y: visible ? 10 : 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 50,
			}}
			className={cn(
				"relative z-50 md:hidden mx-auto flex w-full max-w-[100%] flex-col items-center justify-between bg-transparent px-4 py-2",
				visible && "bg-black/80",
				className
			)}
		>
			{children}
		</Motion.div>
	);
};

export const MobileNavHeader = ({ children, className }) => {
	return (
		<div
			className={cn(
				"flex w-full flex-row items-center justify-between",
				className
			)}
		>
			{children}
		</div>
	);
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<Motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={cn(
						"absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-black/80 backdrop-blur-md px-4 py-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10",
						className
					)}
				>
					{children}
				</Motion.div>
			)}
		</AnimatePresence>
	);
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
	return isOpen ? (
		<IconX
			className="text-white hover:text-gray-300 transition-colors"
			onClick={onClick}
		/>
	) : (
		<IconMenu2
			className="text-white hover:text-gray-300 transition-colors"
			onClick={onClick}
		/>
	);
};

export const NavbarLogo = () => {
	return (
		<div className="relative z-20 mr-4 flex items-center px-2 py-1 transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-100">
			<span className="text-xl font-bold text-white">Curiosity AI</span>
		</div>
	);
};

export const LoginButton = ({ onClick }) => {
	return <Button onClick={onClick}>Login</Button>;
};

export const NavbarButton = ({ children, className, onClick, ...props }) => {
	return (
		<Button
			onClick={onClick}
			className={cn("text-white", className)}
			{...props}
		>
			{children}
		</Button>
	);
};
