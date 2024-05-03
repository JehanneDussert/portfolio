import React from "react";
import { useTranslation } from "../LanguageContext";
import { BigCard } from "../Components/BigCard";
import { MenuItem } from "../type";

export const Education = () => {
	const   { translate } = useTranslation();

	const items: MenuItem[] = [
		{
			title: translate('Architecte en Technologie du Numérique - 42 Paris'),
			subtitle: translate("Apprentissage entre pairs et programmation informatique."),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
			alt: "Techno",
		},
		{
			title: translate('Master II Cyberjustice - Faculté de Droit de Strasbourg'),
			subtitle: translate("Droit des nouvelles technologies et protection des données à caractère personnel."),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Briefcase.webp",
			alt: "Memo",
		},
		{
			title: translate('Diplôme Universitaire de Criminologie - Université Panthéon-Assas (Paris II)'),
			subtitle: translate("Sciences criminelles et criminologiques."),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Magnifying%20Glass%20Tilted%20Left.webp",
			alt: "Woman Technologist",
		},
		{
			title: translate('Master I Justice, Procès, Procédures - Université Panthéon-Sorbonne (Paris I)'),
			subtitle: translate("Droit processuel"),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp",
			alt: "Woman Technologist",
		},
		{
			title: translate('Licence de Droit - Université Panthéon-Sorbonne (Paris I)'),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Abacus.webp",
			alt: "Purse",
		},
	];

	return (
		<BigCard items={items}/>
	);
};
