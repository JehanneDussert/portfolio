import { MenuItem } from "./type";

export type TranslationKey = 'en' | 'fr';

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

export const translations: Record<TranslationKey, { 
  welcomeMessage: string,
  education: string,
 experiences: string,
  contact: string,
  services: string,
  items: string[],
  xpItems: MenuItem[],
  educationItems: MenuItem[],
}> = {
  en: {
    welcomeMessage: "Hello! I'm <strong>Jehanne Dussert</strong> 👋",
    education: "Education",
    experiences: "Experience",
    contact: "Contact",
    services: "Services and rates",
    items: ['full stack software engineer 👩🏻‍💻', 'legal expert ⚖️', 'lecturer 🎙️', 'AI trainer 👩‍🏫'],
    xpItems: [
		{
			title: 'Scientific & legal expert',
			subtitle: "🇪🇺 Council of Europe European Commission for the efficiency of justice (CEPEJ)",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Memo.webp",
			alt: "Memo",
			onClick: handleCoE,
		},
		{
			title: 'Digital expert',
			subtitle: "🇫🇷 Digital College France 2030",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Briefcase.webp",
			alt: "Memo",
			onClick: handleFr2030
		},
		{
			title: 'Software engineer',
			subtitle: "🇫🇷 The interministerial digital department (DINUM)",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Robot.webp",
			alt: "Woman Technologist",
			onClick: handleAlbert
		},
		{
			title: 'Member of the French Open Data Task Force & Lead software engineer',
			subtitle: "🇫🇷 French Ministry of the Interior and Overseas",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
			alt: "Woman Technologist",
			onClick: handleTwincity
		},
		{
			title: 'Business developer',
			subtitle: "🇫🇷 French Ministry of Justice",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Classical%20Building.webp",
			alt: "Purse",
			onClick: handleAjust
		},
  ],
  educationItems: [
		{
			title: 'IT architecture expert',
			subtitle: "Peer learning and computer programming.",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
			alt: "Techno",
		},
		{
			title: "Master's Degree in Cyberjustice - University of Strasbourg",
			subtitle: "New technology law, personal data protection.",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Briefcase.webp",
			alt: "Memo",
		},
		{
			title: 'University Diploma in Criminology - Pantheon-Assas University (Paris II)',
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Magnifying%20Glass%20Tilted%20Left.webp",
			alt: "Woman Technologist",
		},
		{
			title: "Master's Degree Justice, Trial, Procedures - Pantheon-Sorbonne University (Paris I)",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp",
			alt: "Woman Technologist",
		},
		{
			title: "Law bachelor's degree - Pantheon-Sorbonne University (Paris I)",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Abacus.webp",
			alt: "Purse",
		},
	]
  },
  fr: {
    welcomeMessage: "Bonjour ! Je suis <strong>Jehanne Dussert</strong> 👋",
    education: "Mes formations",
    experiences: "Mes expériences",
    contact: "Me contacter",
    services: "Mes services et tarifs",
    items: ['développeuse full stack 👩🏻‍💻', 'juriste IT ⚖️', 'conférencière 🎙️', 'formatrice en IA 👩‍🏫'],
    xpItems: [
		{
			title: 'Experte scientifique & juridique',
			subtitle: "🇪🇺 Commission Européenne pour l'Efficacité de la Justice (CEPEJ) - Conseil de l'Europe",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Memo.webp",
			alt: "Memo",
			onClick: handleCoE,
		},
		{
			title: 'Experte numérique',
			subtitle: "🇫🇷 Collège numérique France 2030",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Briefcase.webp",
			alt: "Memo",
			onClick: handleFr2030
		},
		{
			title: 'Développeuse',
			subtitle: "🇫🇷 Direction Interministérielle du Numérique (DINUM)",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Robot.webp",
			alt: "Woman Technologist",
			onClick: handleAlbert
		},
		{
			title: 'Entrepreneuse d’Intérêt Général et développeuse',
			subtitle: "🇫🇷 Ministère de l'Intérieur et des Outre-mer",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
			alt: "Woman Technologist",
			onClick: handleTwincity
		},
		{
			title: 'Chargée de déploiement',
			subtitle: "🇫🇷 Ministère de la Justice",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Classical%20Building.webp",
			alt: "Purse",
			onClick: handleAjust
		},
  ],
  educationItems: [
		{
			title: 'Architecte en Technologie du Numérique - 42 Paris',
			subtitle: "Apprentissage entre pairs et programmation informatique.",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp",
			alt: "Techno",
		},
		{
			title: 'Master II Cyberjustice - Faculté de Droit de Strasbourg',
			subtitle: "Droit des nouvelles technologies et protection des données à caractère personnel.",
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Briefcase.webp",
			alt: "Memo",
		},
		{
			title: 'Diplôme Universitaire de Criminologie - Université Panthéon-Assas (Paris II)',
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Magnifying%20Glass%20Tilted%20Left.webp",
			alt: "Woman Technologist",
		},
		{
			title: 'Master I Justice, Procès, Procédures - Université Panthéon-Sorbonne (Paris I)',
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp",
			alt: "Woman Technologist",
		},
		{
			title: 'Licence de Droit - Université Panthéon-Sorbonne (Paris I)',
			icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Abacus.webp",
			alt: "Purse",
		},
	]
  },
};

export default translations;