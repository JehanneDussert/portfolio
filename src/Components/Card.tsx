import React from "react";

type menuItem = {
	title: string;
	link: string;
	alt: string;
};

const menuItems: menuItem[] = [
	{
		title: "Mes formations",
		link: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp",
		alt: "Books",
	},
	{
		title: "Mes expériences",
		link: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
		alt: "Woman Technologist",
	},
	{
		title: "Me contacter",
		link: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Incoming%20Envelope.webp",
		alt: "Contact",
	},
	{
		title: "Mes services et tarifs",
		link: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Purse.webp",
		alt: "Purse",
	},
];

const MenuItem: React.FC<{ colNumber: boolean }> = ({ colNumber }) => {
	const elements: number[] = colNumber ? [2, 3] : [0, 1];

	return (
		<div className="md:w-1/2">
			{menuItems.map(
				(item, index) =>
					(index === elements[0] || index === elements[1]) && (
						<button
							type="button"
							className="flex flex-row p-2 sm:pb-8 py-4"
							key={index}
						>
							<div className="bg-[#F7F7F7] rounded flex justify-center items-center shadow-xl">
								<img
									src={item.link}
									alt={item.alt}
									width="80"
									height="80"
									className="p-2"
								/>
							</div>
							<div className="pl-2 flex items-center w-full">
								<p key={index} className="font-anonymous">
									{item.title}
								</p>
							</div>
						</button>
					),
			)}
		</div>
	);
};

export const Card = () => {
	return (
		<div className="flex md:flex-row flex-col items-center md:justify-center h-full">
			<div className="md:w-1/2 md:h-5/6 flex flex-col items-center justify-center">
				<div className="w-2/3">
					<p className="font-anonymous md:text-5xl p-4 text-3xl text-justify md:pr-8 md:pb-12 text-[#3E4261]">
						Bonjour ! Je suis <strong>Jehanne Dussert</strong>, développeuse
						freelance, juriste IT, conférencière.
					</p>
					<div className="hidden sm:flex w-full flex-row">
						<MenuItem colNumber={false} />
						<MenuItem colNumber={true} />
					</div>
				</div>
			</div>
			<div className="md:w-3/12 w-2/3 rounded-3xl flex justify-center bg-[#F8F8F8] shadow-xl hover:shadow-2xl my-4 sm:my-0">
				<img src="/portrait.png" alt="Portrait Jehanne Dussert" />
			</div>

			<div className="block sm:hidden flex-row w-2/3">
				<MenuItem colNumber={false} />
				<MenuItem colNumber={true} />
			</div>
		</div>
	);
};
