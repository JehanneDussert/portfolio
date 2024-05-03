import React, { useState } from "react";
import { useTranslation } from "../LanguageContext";

export const Footer = () => {
  const { setLanguage, language } = useTranslation();
   const flag = language === 'en' ? '🇫🇷' : '🇬🇧';
   
	return (
		<div className="py-4 md:px-10 px-4 flex flex-row justify-between items-start border-t">
			<button className="text-3xl" onClick={setLanguage}>{flag}</button>
			<div className="flex-grow"/>
			<div className="font-teras md:text-4xl text-2xl text-[#3E4261] flex flex-row justify-center items-center h-full">
				<a title="Github" href="https://github.com/JehanneDussert/" target="_blank" className="px-2">
                    <img src="/github.svg" width={30}/>
                </a>
				<a title="Gitlab" href="https://gitlab.com/JehanneDussert" target="_blank" className="px-2">
                    <img src="/gitlab.svg" width={30}/>
                </a>
				<a title="LinkedIn" href="https://www.linkedin.com/in/jehanne-dussert/" target="_blank" className="px-2">
                    <img src="/linkedin.svg" width={20}/>
                </a>
				<a title="Medium" href="https://medium.com/@jehanne-dussert" target="_blank" className="px-2">
                    <img src="/medium.svg" width={30}/>
                </a>
			</div>
		</div>
	);
};
