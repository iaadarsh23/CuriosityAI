"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const ContainerTextFlip = ({ words, size = "small" }) => {
	return (
		<motion.div
			layout
			layoutId="words-here"
			animate={{ width: "100%" }}
			transition={{ duration: 0.35 }}
			className={cn(
				"relative inline-block rounded-lg pt-2 pb-3 text-center font-bold text-black dark:text-white",
				size === "small" ? "text-2xl" : "text-4xl md:text-7xl"
			)}
		>
			<span className="inline-block">
				<motion.span className="inline-block" transition={{ duration: 0.7 }}>
					{words}
				</motion.span>
			</span>
		</motion.div>
	);
};

export default ContainerTextFlip;
