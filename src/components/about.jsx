import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiMessageSquare, FiZap, FiShield } from "react-icons/fi";
import { ContainerTextFlip } from "./ui/container-text-flip";

const About = () => {
	const aboutWords = ["mission", "vision", "values", "purpose"];

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="flex items-center justify-center gap-2 mb-4">
						<ContainerTextFlip words={aboutWords} size="small" />
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white">
							About Us
						</h2>
					</div>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Curiosity AI is your intelligent companion for exploring the world
						of artificial intelligence. We combine cutting-edge technology with
						user-friendly interfaces to make AI accessible to everyone.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
					>
						<div className="text-primary-600 dark:text-primary-400 mb-4">
							<FiCode className="h-6 w-6" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
							Our Mission
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							To democratize AI technology and make it accessible to everyone,
							regardless of their technical background.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
					>
						<div className="text-primary-600 dark:text-primary-400 mb-4">
							<FiMessageSquare className="h-6 w-6" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
							Our Vision
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							To create a world where AI enhances human potential and fosters
							innovation in every field.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
					>
						<div className="text-primary-600 dark:text-primary-400 mb-4">
							<FiShield className="h-6 w-6" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
							Our Values
						</h3>
						<p className="text-gray-600 dark:text-gray-300">
							We believe in transparency, accessibility, and continuous
							innovation to serve our users better.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default About;
