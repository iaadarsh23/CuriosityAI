import { use, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ChatBot from "./components/chatBot";
import Header from "./components/header";
import Home from "./components/home";
import FeaturesSection from "./components/features";

function App() {
	const [openBot, setOpenBot] = useState(false);
	const [showHome, setClose] = useState(true);

	function renderChat() {
		setOpenBot(true);
		setClose(false);
	}

	return (
		<BrowserRouter>
			<>
				<Header />
				{/* //agr showhome true hai toh home page dikha dega */}
				{showHome && <Home openChatBot={renderChat} />}
				{/* //agr openBot true hai toh chatbot dikha dega */}
				{openBot && <ChatBot />}
				<FeaturesSection />
			</>
		</BrowserRouter>
	);
}

export default App;
