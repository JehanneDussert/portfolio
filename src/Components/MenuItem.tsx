import React from "react";
import { useTranslation } from '../LanguageContext';

type menuItem = {
	title: string;
	icon: string;
	alt: string;
	onClick?: (() => void);
};

export const MenuItem: React.FC<{ colNumber: boolean }> = ({ colNumber }) => {
	const   elements: number[] = colNumber ? [2, 3] : [0, 1];
 	const   { translate } = useTranslation();

	function redirectToPrices() {
		window.open('https://www.malt.fr/profile/jehannedussert', '_blank');
	}

	function sendEmail() {
		window.location.href = "mailto:jehanne-dussert@hotmail.fr";
	}
	
	const menuItems: menuItem[] = [
		{
			title: translate('education'),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp",
			alt: "Books",
		},
		{
			title: translate('experiences'),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
			alt: "Woman Technologist",
		},
		{
			title: translate('contact'),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Incoming%20Envelope.webp",
			alt: "Contact",
			onClick: sendEmail
		},
		{
			title: translate('services'),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Purse.webp",
			alt: "Purse",
			onClick: redirectToPrices
		},
	];
	
	return (
		<div className="md:w-1/2">
			{menuItems.map(
				(item, index) =>
					(index === elements[0] || index === elements[1]) && (
						<button
							type="button"
							className="flex flex-row p-2 sm:pb-2 my-4 w-full"
							key={index}
							onClick={item.onClick}
						>
							<div className="shadow-xl hover:shadow-2xl flex flex-row w-full rounded-xl border">
							<div className="bg-[#F7F7F7] flex justify-center items-center rounded-l-xl">
								<img
									src={item.icon}
									alt={item.alt}
									width="80"
									height="80"
									className="p-2"
								/>
							</div>
							<div className="md:pl-6 pl-2 flex items-center w-full">
								<p key={index} className="font-anonymous">
									{item.title}
								</p>
							</div></div>
						</button>
					),
			)}
		</div>
	);
};