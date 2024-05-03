import React, { useEffect, useState } from "react";
import { useTranslation } from "../LanguageContext";
import { BigCard } from "../Components/BigCard";
import translations from "../translations";

export const Education = () => {
 	const	{ language } = useTranslation();
	const	[items, setItems] = useState(translations[language].educationItems);

	useEffect(() => {
		setItems(translations[language].educationItems);
	}, [language])

	return (
		<BigCard items={items}/>
	);
};