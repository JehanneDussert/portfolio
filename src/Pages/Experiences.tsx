import React from "react";
import { useTranslation } from "../LanguageContext";
import { BigCard } from "../Components/BigCard";
import { MenuItem } from "../type";
import { useNavigate } from "react-router-dom";

export const Experiences = () => {
	const   { translate } = useTranslation();
	const	navigate = useNavigate();

	const handleCoE = () => {
		window.open('https://www.coe.int/en/web/cepej/ai-advisory-board', '_blank');
	}

	const handleFr2030 = () => {
		window.open('https://www.elysee.fr/emmanuel-macron/france2030', '_blank');
	}

	const handleAlbert = () => {
		window.open('https://github.com/etalab-ia/albert/', '_blank');
	}

	const handleTwincity = () => {
		window.open('https://github.com/twin-city/unreal-project/wiki', '_blank');
	}

	const handleAjust = () => {
		window.open('https://beta.gouv.fr/startups/a-just.html', '_blank');
	}

	const items: MenuItem[] = [
		{
			title: translate('Experte scientifique & juridique'),
			subtitle: translate("🇪🇺 Commission Européenne pour l'Efficacité de la Justice (CEPEJ) - Conseil de l'Europe"),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Memo.webp",
			alt: "Memo",
			onClick: handleCoE,
		},
		{
			title: translate('Experte numérique'),
			subtitle: translate("🇫🇷 Collège numérique France 2030"),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Briefcase.webp",
			alt: "Memo",
			onClick: handleFr2030
		},
		{
			title: translate('Développeuse'),
			subtitle: translate("🇫🇷 Direction Interministérielle du Numérique (DINUM)"),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Robot.webp",
			alt: "Woman Technologist",
			onClick: handleAlbert
		},
		{
			title: translate('Entrepreneuse d’Intérêt Général et développeuse'),
			subtitle: translate("🇫🇷 Ministère de l'Intérieur et des Outre-mer"),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
			alt: "Woman Technologist",
			onClick: handleTwincity
		},
		{
			title: translate('Chargée de déploiement'),
			subtitle: translate("🇫🇷 Ministère de la Justice"),
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Classical%20Building.webp",
			alt: "Purse",
			onClick: handleAjust
		},
	];

	return (
		<BigCard items={items}/>
	);
};