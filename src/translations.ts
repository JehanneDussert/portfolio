export type TranslationKey = 'en' | 'fr';

export const translations: Record<TranslationKey, { 
  welcomeMessage: string,
  education: string,
 experiences: string,
  contact: string,
  services: string,
  items: string[],
}> = {
  en: {
    welcomeMessage: "Hello! I'm <strong>Jehanne Dussert</strong> 👋",
    education: "Education",
    experiences: "Experience",
    contact: "Contact",
    services: "Services and rates",
    items: ['software engineer 👩🏻‍💻', 'legal expert ⚖️', 'lecturer 🎙️']
  },
  fr: {
    welcomeMessage: "Bonjour ! Je suis <strong>Jehanne Dussert</strong> 👋",
    education: "Mes formations",
    experiences: "Mes expériences",
    contact: "Me contacter",
    services: "Mes services et tarifs",
    items: ['développeuse fullstack 👩🏻‍💻', 'juriste IT ⚖️', 'conférencière 🎙️']
  },
};

export default translations;