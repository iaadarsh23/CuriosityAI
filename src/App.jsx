import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import ChatBot from "./components/chatBot";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { LoadingScreen } from "./components/ui/loading-screen";
import LoadingAnimation from "./components/ui/LoadingAnimation";
import { AnimatePresence } from "framer-motion";

// Lazy load heavy components
const FeaturesSection = lazy(() => import("./components/features"));
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));
const ChatInterface = lazy(() => import("./components/ChatInterface"));
const AuthModal = lazy(() => import("./components/auth/AuthModal"));

function AppContent() {
	const navigate = useNavigate();
	const [isChatMode, setIsChatMode] = useState(false);
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
	const { user } = useAuth();

	useEffect(() => {
		const path = window.location.pathname;
		setIsChatMode(path === "/chat" || path === "/chat-interface");
	}, [window.location.pathname]);

	const handleStartExploring = () => {
		if (!user) {
			setIsAuthModalOpen(true);
			return;
		}
		setIsChatMode(true);
		navigate("/chat", { replace: true });
	};

	const handleExitChat = () => {
		setIsChatMode(false);
		navigate("/", { replace: true });
	};

	return (
		<ThemeProvider>
			<div className="min-h-screen bg-black">
				{!isChatMode && (
					<Header
						isChatMode={isChatMode}
						onExitChat={handleExitChat}
						onAuthClick={() => setIsAuthModalOpen(true)}
						user={user}
					/>
				)}

				<Suspense fallback={<LoadingAnimation />}>
					<Routes>
						<Route
							path="/"
							element={
								!isChatMode && (
									<>
										<Home openChatBot={handleStartExploring} />
										<FeaturesSection />
										<About />
										<Contact />
									</>
								)
							}
						/>
						<Route
							path="/chat"
							element={
								<ProtectedRoute>
									<ChatBot />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/chat-interface"
							element={
								<ProtectedRoute>
									<ChatInterface />
								</ProtectedRoute>
							}
						/>
						<Route path="/features" element={<FeaturesSection />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Suspense>

				{isAuthModalOpen && (
					<Suspense fallback={<LoadingAnimation />}>
						<AuthModal
							isOpen={isAuthModalOpen}
							onClose={() => setIsAuthModalOpen(false)}
						/>
					</Suspense>
				)}
			</div>
		</ThemeProvider>
	);
}

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<AppContent />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
