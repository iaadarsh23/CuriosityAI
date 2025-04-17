"use client";
import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function ContainerTextFlip({
	words = ["better", "modern", "beautiful", "awesome"],
	interval = 3000,
	className,
	textClassName,
	animationDuration = 700,
	size = "default", // Add size prop with default value
}) {
	const id = useId();
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [width, setWidth] = useState(100);
	const textRef = React.useRef(null);

	const updateWidthForWord = () => {
		if (textRef.current) {
			// Add some padding to the text width (30px on each side)
			const textWidth = textRef.current.scrollWidth + 30;
			setWidth(textWidth);
		}
	};

	useEffect(() => {
		// Update width whenever the word changes
		updateWidthForWord();
	}, [currentWordIndex]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
			// Width will be updated in the effect that depends on currentWordIndex
		}, interval);

		return () => clearInterval(intervalId);
	}, [words, interval]);

	const sizeStyles = {
		small: "text-lg md:text-2xl",
		default: "text-4xl md:text-7xl",
		large: "text-5xl md:text-8xl",
	};

	return (
		<motion.div
			layout
			layoutId={`words-here-${id}`}
			className={cn(
				"relative inline-block rounded-lg px-6 py-4 text-center font-bold text-black dark:text-white",
				sizeStyles[size] || sizeStyles.default,
				"[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
				"shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
				"dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
				"dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
				className
			)}
		>
			<motion.span
				key={currentWordIndex}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -20, opacity: 0 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className="inline-block px-2"
			>
				{words[currentWordIndex]}
			</motion.span>
		</motion.div>
	);
}
