import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SparklesCore } from "./ui/sparkles";

const Contact = () => {
	return (
		<div className="min-h-screen bg-black relative">
			<SparklesCore
				className="absolute inset-0 z-0"
				background="transparent"
				minSize={1}
				maxSize={3}
				speed={2}
				particleColor="#ffffff"
				particleDensity={40}
			/>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Have questions or feedback? We'd love to hear from you. Connect with
						us through any of these channels.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10"
					>
						<h3 className="text-2xl font-bold text-white mb-6">Contact Form</h3>
						<form className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-300"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="mt-1 block w-full rounded-md bg-black/60 border-white/10 text-white focus:border-sky-500 focus:ring-sky-500"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-300"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="mt-1 block w-full rounded-md bg-black/60 border-white/10 text-white focus:border-sky-500 focus:ring-sky-500"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-300"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={4}
									className="mt-1 block w-full rounded-md bg-black/60 border-white/10 text-white focus:border-sky-500 focus:ring-sky-500"
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200 hover:opacity-90"
							>
								Send Message
							</button>
						</form>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10"
					>
						<h3 className="text-2xl font-bold text-white mb-6">
							Connect With Us
						</h3>
						<div className="space-y-6">
							<a
								href="mailto:contact@curiosityai.com"
								className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors"
							>
								<FiMail className="h-6 w-6" />
								<span>contact@curiosityai.com</span>
							</a>
							<a
								href="https://github.com/curiosityai"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors"
							>
								<FiGithub className="h-6 w-6" />
								<span>GitHub</span>
							</a>
							<a
								href="https://linkedin.com/company/curiosityai"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors"
							>
								<FiLinkedin className="h-6 w-6" />
								<span>LinkedIn</span>
							</a>
							<a
								href="https://twitter.com/curiosityai"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-gray-400 hover:text-sky-400 transition-colors"
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
