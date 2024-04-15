import React from "react";

export const Card = () => {
	return (
		<div className="flex md:flex-row flex-col items-center md:justify-center h-full">
			<div className="md:w-1/2 md:h-5/6 m-4 p-4 flex flex-col items-center justify-center">
				<p className="font-anonymous md:text-5xl text-3xl md:p-10 text-justify w-2/3 text-[#3E4261]">
					Bonjour ! Je suis <strong>Jehanne Dussert</strong>, développeuse
					freelance, juriste IT, conférencière.
				</p>
				<svg
					className="mt-4"
					viewBox="0 0 500 500"
					width="100"
					height="100"
					xmlns="http://www.w3.org/2000/svg"
					aria-label="Menu d'icônes"
				>
					<path
						d="M 50 50 L 50 200 Q 100 200 100 250 L 100 300 H 200 V 400 L 250 400 H 400"
						fill="none"
						stroke="#000"
						strokeWidth="2"
					/>
					<title>Menu d'icônes</title>
				</svg>
			</div>
			<div className="md:w-3/12 w-2/3 rounded-3xl flex justify-center bg-[#F8F8F8] shadow-2xl">
				<img src="/portrait.png" alt="Portrait Jehanne Dussert" />
			</div>
		</div>
	);
};
