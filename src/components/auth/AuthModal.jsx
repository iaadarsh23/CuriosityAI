import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { HiX } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";

const AuthModal = ({ isOpen, onClose }) => {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { signIn, signUp, signInWithGoogle } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			if (isLogin) {
				await signIn(email, password);
			} else {
				await signUp(email, password);
			}
			onClose();
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleSignIn = async () => {
		setError("");
		setLoading(true);

		try {
			await signInWithGoogle();
			onClose();
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
					/>
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						className="relative w-full max-w-lg bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl shadow-2xl p-8 overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
						>
							<HiX className="w-6 h-6" />
						</button>

						{/* Title */}
						<h2 className="text-3xl font-bold text-white mb-2 text-center">
							{isLogin ? "Welcome Back" : "Create Account"}
						</h2>
						<p className="text-neutral-400 text-center mb-8">
							{isLogin
								? "Sign in to continue your journey"
								: "Join us and explore the future of AI"}
						</p>

						{/* Error Message */}
						{error && (
							<div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
								<p className="text-red-500 text-sm text-center">{error}</p>
							</div>
						)}

						{/* Google Sign In Button */}
						<button
							onClick={handleGoogleSignIn}
							disabled={loading}
							className="w-full flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-neutral-900 font-medium rounded-lg px-4 py-3 transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<FcGoogle className="w-6 h-6" />
							Continue with Google
						</button>

						<div className="relative mb-6">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-neutral-800"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-neutral-900 text-neutral-400">
									Or continue with email
								</span>
							</div>
						</div>

						{/* Email Form */}
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-neutral-300 mb-1.5">
									Email address
								</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-800 focus:border-neutral-600 text-white rounded-lg outline-none transition-colors"
									placeholder="Enter your email"
									required
									disabled={loading}
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-neutral-300 mb-1.5">
									Password
								</label>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-800 focus:border-neutral-600 text-white rounded-lg outline-none transition-colors"
									placeholder="Enter your password"
									required
									disabled={loading}
								/>
							</div>
							{isLogin && (
								<div className="flex items-center justify-end">
									<button
										type="button"
										className="text-sm text-neutral-400 hover:text-white transition-colors"
										disabled={loading}
									>
										Forgot password?
									</button>
								</div>
							)}
							<button
								type="submit"
								disabled={loading}
								className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-lg px-4 py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{loading ? (
									<span className="flex items-center justify-center gap-2">
										<svg
											className="animate-spin h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Processing...
									</span>
								) : isLogin ? (
									"Sign In"
								) : (
									"Create Account"
								)}
							</button>
						</form>

						{/* Toggle Login/Signup */}
						<p className="mt-6 text-center text-neutral-400">
							{isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
							<button
								onClick={() => setIsLogin(!isLogin)}
								className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
								disabled={loading}
							>
								{isLogin ? "Sign up" : "Sign in"}
							</button>
						</p>

						{/* Decorative Elements */}
						<div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/20 rounded-full filter blur-3xl"></div>
						<div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};

export default AuthModal;
