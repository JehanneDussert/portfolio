import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const	navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};


	return (
		<div className="pt-6 md:px-10 px-4 flex flex-row justify-between items-start">
			<button onClick={handleClick} className="font-teras md:text-4xl text-2xl text-[#3E4261]">
				Jehanne.
			</button>
			<div className="flex-grow"/>
			<h1 className="font-teras md:text-4xl text-2xl text-[#3E4261]">
				<a href="mailto:jehanne-dussert@hotmail.fr">Contact</a>
			</h1>
		</div>
	);
};
