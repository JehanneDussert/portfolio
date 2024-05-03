export type TranslationKey = 'en' | 'fr';

const translations: Record<TranslationKey, { 
  welcomeMessage: string,
  education: string,
 experiences: string,
  contact: string,
  services: string
}> = {
  en: {
    welcomeMessage: "Welcome! I'm <strong>Jehanne Dussert</strong> 👋",
    education: "Education",
   experiences: "Experience",
    contact: "Contact Me",
    services: "Services and rates",
  },
  fr: {
    welcomeMessage: "Bienvenue ! Je suis <strong>Jehanne Dussert</strong> 👋",
    education: "Mes formations",
   experiences: "Mes expériences",
    contact: "Me contacter",
    services: "Mes services et tarifs",
  },
};

export default translations;