"use client";
import React, { useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import Button from "../button";

export const Navbar = ({ children, className }) => {
	const ref = useRef(null);
	const { scrollY } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 100) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	});

	return (
		<motion.div
			ref={ref}
			className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}
		>
			{React.Children.map(children, (child) =>
				React.isValidElement(child)
					? React.cloneElement(child, { visible })
					: child
			)}
		</motion.div>
	);
};

export const NavBody = ({ children, className, visible }) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? "blur(10px)" : "none",
				boxShadow: visible
					? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
					: "none",
				width: visible ? "40%" : "100%",
				y: visible ? 10 : 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 50,
			}}
			style={{ minWidth: "800px" }}
			className={cn(
				"relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-black/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-solid border-white/10 px-4 py-2 lg:flex",
				visible && "bg-black/60",
				className
			)}
		>
			{children}
		</motion.div>
	);
};

export const NavItems = ({ items, className, onItemClick, visible }) => {
	const [hovered, setHovered] = useState(null);
	return (
		<motion.div
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-300 lg:flex lg:space-x-2",
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
						<motion.div
							layoutId="hovered"
							className="absolute inset-0 h-full w-full rounded-full bg-white"
						/>
					)}
					<span className="relative z-20">{item.name}</span>
				</Link>
			))}
		</motion.div>
	);
};

export const MobileNav = ({ children, className, visible }) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? "blur(10px)" : "none",
				boxShadow: visible
					? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
					: "none",
				width: visible ? "90%" : "100%",
				paddingRight: visible ? "12px" : "0px",
				paddingLeft: visible ? "12px" : "0px",
				borderRadius: visible ? "4px" : "2rem",
				y: visible ? 20 : 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 50,
			}}
			className={cn(
				"relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
				visible && "bg-white/80 dark:bg-neutral-950/80",
				className
			)}
		>
			{children}
		</motion.div>
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

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={cn(
						"absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
						className
					)}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
	return isOpen ? (
		<IconX className="text-black dark:text-white" onClick={onClick} />
	) : (
		<IconMenu2 className="text-black dark:text-white" onClick={onClick} />
	);
};

export const NavbarLogo = ({ visible }) => {
	return (
		<Link
			to="/"
			className={cn(
				"relative z-20 mr-4 flex items-center px-2 py-1 transition-colors duration-300",
				visible ? "text-gray-900" : "text-white"
			)}
		>
			<span className="text-2xl font-bold">Curiosity AI</span>
		</Link>
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
