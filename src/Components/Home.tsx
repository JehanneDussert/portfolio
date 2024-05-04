import React, { useEffect, useState } from "react";
import { useTranslation } from '../LanguageContext';
import { MenuItem } from "./MenuItem";
import translations from "../translations";

export const Home = () => {
 	const	{ translate, language } = useTranslation();
	const	[index, setIndex] = useState(0);
	const	[items, setItems] = useState(translations[language].items);
	const	[desc, setDesc] = useState(items[index]);

	useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % items.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [items.length]);

	useEffect(() => {
		setDesc(items[index]);
	}, [index])

	useEffect(() => {
		setItems(translations[language].items);
	}, [language])

	return (
		<div className="flex md:flex-row flex-col items-center justify-center h-full">
			<div className="md:w-2/3 w-full md:h-5/6 flex flex-col items-center justify-center">
				<div className="md:w-2/3 w-full flex items-center justify-center flex-col">
					<p dangerouslySetInnerHTML={{ __html: translate('welcomeMessage') }} className="font-anonymous w-9/12 md:w-full md:text-3xl md:pb-4 pb-2 text-xl text-center text-[#3E4261]"/>
					<p className="font-anonymous md:text-2xl px-4 text-center md:pr-8 md:pb-10 text-[#3E4261]">
						{'>'} {desc}
					</p>
					<div className="hidden md:flex w-full flex-row ">
						<MenuItem colNumber={false} />
						<MenuItem colNumber={true} />
					</div>
				</div>
			</div>
			<div className="block md:hidden flex-row md:w-2/3 w-11/12">
				<MenuItem colNumber={false} />
				<MenuItem colNumber={true} />
			</div>
		</div>
	);
};
