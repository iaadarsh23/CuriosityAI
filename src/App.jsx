import { use, useState } from "react";
import ChatBot from "./components/chatBot";
import Header from "./components/header";
import Home from "./components/home";

function App() {
	const [openBot, setOpenBot] = useState(false);
	const [showHome, setClose] = useState(true);

	function renderChat() {
		setOpenBot(true);
		setClose(false);
	}

	return (
		<>
			<Header />
			{showHome && <Home openChatBot={renderChat} />}

			{openBot && <ChatBot />}
		</>
	);
}

export default App;
