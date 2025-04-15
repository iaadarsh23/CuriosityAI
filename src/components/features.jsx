"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiMessageSquare, FiZap, FiShield } from "react-icons/fi";

const features = [
	{
		icon: <FiCode className="h-6 w-6" />,
		title: "Code Generation",
		description:
			"Generate code snippets and complete functions in multiple programming languages with AI assistance.",
	},
	{
		icon: <FiMessageSquare className="h-6 w-6" />,
		title: "Natural Language Processing",
		description:
			"Interact with the AI using natural language and get accurate, context-aware responses.",
	},
	{
		icon: <FiZap className="h-6 w-6" />,
		title: "Fast Response Time",
		description:
			"Get instant responses with our optimized AI models and efficient processing.",
	},
	{
		icon: <FiShield className="h-6 w-6" />,
		title: "Secure & Private",
		description:
			"Your data and conversations are encrypted and protected with enterprise-grade security.",
	},
];

const Features = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Powerful Features
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Discover the capabilities that make Curiosity AI your perfect coding
						companion.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<div className="text-primary-600 dark:text-primary-400 mb-4">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
