import React from "react";

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 bg-black">
			<div className="flex gap-5">
				<h1 className="text-7xl transition-colors duration-300 ease-in-out font-bold text-gray-500 hover:text-white">
					CURIOSITY
				</h1>
				<h1 className="text-7xl transition-colors duration-300 ease-in-out font-bold text-white hover:text-gray-500">
					AI
				</h1>
			</div>

			<div className="flex gap-3">
				<p className="text-2xl font-semibold text-white">Be Curious</p>
				<p className="text-2xl font-semibold text-gray-500 transition-colors duration-300 ease-in-out  hover:text-white ">
					Chat with Curiosity
				</p>
			</div>
		</div>
	);
};

export default Home;
