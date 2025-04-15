import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { ContainerTextFlip } from "./ui/container-text-flip";

const Contact = () => {
	const contactWords = ["connect", "reach", "contact", "message"];

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="flex items-center justify-center gap-2 mb-4">
						<ContainerTextFlip words={contactWords} size="small" />
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white">
							With Us
						</h2>
					</div>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Have questions or feedback? We'd love to hear from you. Connect with
						us through any of these channels.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
					>
						<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
							Contact Form
						</h3>
						<form className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={4}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
							>
								Send Message
							</button>
						</form>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
					>
						<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
							Connect With Us
						</h3>
						<div className="space-y-4">
							<a
								href="mailto:contact@curiosityai.com"
								className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
							>
								<FiMail className="h-6 w-6" />
								<span>contact@curiosityai.com</span>
							</a>
							<a
								href="https://github.com/curiosityai"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
							>
								<FiGithub className="h-6 w-6" />
								<span>GitHub</span>
							</a>
							<a
								href="https://linkedin.com/company/curiosityai"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
							>
								<FiLinkedin className="h-6 w-6" />
								<span>LinkedIn</span>
							</a>
							<a
								href="https://twitter.com/curiosityai"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
							>
								<FiTwitter className="h-6 w-6" />
								<span>Twitter</span>
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
