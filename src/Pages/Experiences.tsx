import React, { useEffect, useState } from "react";
import { useTranslation } from "../LanguageContext";
import { BigCard } from "../Components/BigCard";
import translations from "../translations";

export const Experiences = () => {
 	const	{ language } = useTranslation();
	const	[items, setItems] = useState(translations[language].xpItems);

	useEffect(() => {
		setItems(translations[language].xpItems);
	}, [language])

	return (
		<BigCard items={items}/>
	);
};