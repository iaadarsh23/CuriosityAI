import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "./components/chatBot";
import Header from "./components/header";
import Home from "./components/home";
import FeaturesSection from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	const [openBot, setOpenBot] = useState(false);
	const [showHome, setClose] = useState(true);

	function renderChat() {
		setOpenBot(true);
		setClose(false);
	}

	return (
		<BrowserRouter>
			<ThemeProvider>
				<>
					<Header />
					<Routes>
						<Route
							path="/"
							element={showHome && <Home openChatBot={renderChat} />}
						/>
						<Route path="/chat" element={openBot && <ChatBot />} />
						<Route path="/features" element={<FeaturesSection />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
