import React from "react";
import { navData } from "../data/navData";

const Header = () => {
	return (
		<div className="fixed top-0 left-0 w-full z-10 bg-black">
			<div className="flex items-center justify-between p-4 mx-9">
				<div>
					<a className="text-2xl font-bold text-white" href="#hero">
						Curiosity
					</a>
				</div>
				<nav>
					<div className="flex gap-4">
						{navData.map((data) => (
							<a
								key={data.id}
								href={data.path}
								className="text-white hover:text-blue-300"
							>
								{data.title}
							</a>
						))}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
