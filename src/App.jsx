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

	function renderChat() {
		setOpenBot(true);
	}

	return (
		<BrowserRouter>
			<ThemeProvider>
				<div className="min-h-screen bg-black">
					<Header />
					<main>
						<Routes>
							<Route
								path="/"
								element={
									<>
										<Home openChatBot={renderChat} />
										<FeaturesSection />
										<About />
										<Contact />
									</>
								}
							/>
							<Route path="/chat" element={<ChatBot />} />
							<Route path="/features" element={<FeaturesSection />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</main>
					{openBot && <ChatBot onClose={() => setOpenBot(false)} />}
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
