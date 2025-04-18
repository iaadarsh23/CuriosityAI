import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ user }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleSignOut = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="text-white text-xl font-bold">
							Curiosity AI
						</Link>
					</div>
					<div className="flex items-center space-x-8">
						<Link
							to="/"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Home
						</Link>
						<Link
							to="/about"
							className="text-gray-300 hover:text-white transition-colors"
						>
							About
						</Link>
						<Link
							to="/features"
							className="text-gray-300 hover:text-white transition-colors"
						>
							Features
						</Link>
						{user ? (
							<div className="relative">
								<button
									onClick={() => setIsDropdownOpen(!isDropdownOpen)}
									className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									{user.email.charAt(0).toUpperCase()}
								</button>
								<AnimatePresence>
									{isDropdownOpen && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.2 }}
											className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
										>
											<div className="py-1">
												<div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
													{user.email}
												</div>
												<button
													onClick={handleSignOut}
													className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
												>
													Sign Out
												</button>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						) : (
							<Link
								to="/login"
								className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
							>
								Sign In
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
