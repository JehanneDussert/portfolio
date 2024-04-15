import React from "react";

export const Header = () => {
	return (
		<div className="py-6 px-10 flex flex-row justify-between items-start">
			<h1 className="font-teras md:text-4xl text-2xl text-[#3E4261]">
				Jehanne.
			</h1>
			<div className="flex-grow"/>
			<h1 className="font-teras md:text-4xl text-2xl text-[#3E4261]">
				<a href="mailto:jehanne-dussert@hotmail.fr">Contact</a>
			</h1>
		</div>
	);
};
