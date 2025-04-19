"use client";
import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ isLoading }) => {
	if (!isLoading) return null;

	return (
		<AnimatePresence>
			{isLoading && (
				<Motion.div
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className="flex flex-col items-center">
						<div className="relative flex items-center justify-center">
							<BrainAnimation />
							<div className="absolute">
								<Dots />
							</div>
						</div>
						<div className="mt-8 text-center">
							<Motion.h2
								className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								Curiosity AI
							</Motion.h2>
							<Motion.p
								className="mt-2 text-sm text-white/70"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
							>
								Initializing neural networks...
							</Motion.p>
						</div>
					</div>
				</Motion.div>
			)}
		</AnimatePresence>
	);
};

// Reusable smaller loader component for individual tasks
export const Loader = ({ size = "medium", color = "blue-purple" }) => {
	const sizeClasses = {
		small: "w-5 h-5",
		medium: "w-8 h-8",
		large: "w-12 h-12",
	};

	const colorClasses = {
		"blue-purple": "from-blue-500 to-purple-600",
		"green-blue": "from-green-400 to-blue-500",
		"pink-purple": "from-pink-500 to-purple-600",
	};

	return (
		<div className="flex items-center justify-center">
			<div
				className={`${sizeClasses[size]} rounded-full border-2 border-t-transparent animate-spin bg-gradient-to-r ${colorClasses[color]}`}
			></div>
		</div>
	);
};

// Brain animation component
const BrainAnimation = () => {
	return (
		<Motion.div
			className="relative w-24 h-24 flex items-center justify-center"
			initial={{ scale: 0.8 }}
			animate={{
				scale: [0.8, 1.1, 0.9, 1],
				rotateY: [0, 10, 0, -10, 0],
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				repeatType: "loop",
			}}
		>
			<div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl" />
			<div className="relative w-16 h-16">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full"
				>
					<path
						d="M9.5 2C9.5 2 9 5.5 11 7C13 8.5 14.5 10 14.5 12C14.5 14 13 14.5 12 16C11 17.5 11 19 11 19H13C13 19 13 17.5 14 16.5C15 15.5 17 14 17 12C17 10 15.5 8 14 6.5C12.5 5 12 2 12 2M8 4C8 4 7 6 7 8C7 10 8 11.5 8 13C8 14.5 7 15.5 7 17C7 18.5 8 19 8 19M19 5C19 5 17 8 17 10M16 22V20M12 22V18M8 22V22M3 18C3 16 7 16 7 14C7 12 5 12 5 10C5 8 7 7 7 6"
						stroke="url(#gradient)"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<defs>
						<linearGradient
							id="gradient"
							x1="3"
							y1="2"
							x2="19"
							y2="22"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#3B82F6" />
							<stop offset="1" stopColor="#8B5CF6" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</Motion.div>
	);
};

// Animated dots for the loading indicator
const Dots = () => {
	return (
		<div className="flex space-x-2 mt-4">
			{[0, 1, 2].map((i) => (
				<Motion.div
					key={i}
					className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
					initial={{ opacity: 0.3, y: 0 }}
					animate={{
						opacity: [0.3, 1, 0.3],
						y: [0, -4, 0],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						delay: i * 0.2,
					}}
				/>
			))}
		</div>
	);
};

export default LoadingScreen;
