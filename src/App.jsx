import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ChatBot from "./components/chatBot";
import Header from "./components/header";
import Home from "./components/home";
import FeaturesSection from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import { ThemeProvider } from "./context/ThemeContext";
import ChatInterface from "./components/ChatInterface";

function AppContent() {
	const navigate = useNavigate();
	const [isChatMode, setIsChatMode] = useState(false);

	useEffect(() => {
		// Update isChatMode based on current path
		const path = window.location.pathname;
		setIsChatMode(path === "/chat" || path === "/chat-interface");
	}, []);

	const handleStartExploring = () => {
		setIsChatMode(true);
		navigate("/chat");
	};

	const handleExitChat = () => {
		setIsChatMode(false);
		navigate("/");
	};

	return (
		<ThemeProvider>
			<div className="min-h-screen bg-black">
				{!isChatMode && (
					<Header isChatMode={isChatMode} onExitChat={handleExitChat} />
				)}
				<main className={isChatMode ? "h-screen" : ""}>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Home openChatBot={handleStartExploring} />
									<FeaturesSection />
									<About />
									<Contact />
								</>
							}
						/>
						<Route
							path="/chat"
							element={
								<div className="h-screen">
									<ChatBot onExit={handleExitChat} />
								</div>
							}
						/>
						<Route path="/features" element={<FeaturesSection />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="/chat-interface"
							element={
								<div className="h-screen">
									<ChatInterface />
								</div>
							}
						/>
					</Routes>
				</main>
			</div>
		</ThemeProvider>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

export default App;
