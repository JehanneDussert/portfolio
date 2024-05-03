import React, { useEffect, useState } from "react";
import { useTranslation } from '../LanguageContext';
import { MenuItem } from "./MenuItem";

export const Card = () => {
	const	items: string[] = ['développeuse fullstack 👩🏻‍💻', 'juriste IT ⚖️', 'conférencière 🎙️'];
	const	[index, setIndex] = useState(0);
	const	[desc, setDesc] = useState(items[index]);
 	const	{ translate } = useTranslation();

	useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % items.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [items.length]);

	useEffect(() => {
		setDesc(items[index]);
	}, [index])

	return (
		<div className="flex md:flex-row flex-col items-center justify-center h-full">
			<div className="md:w-2/3 w-full md:h-5/6 flex flex-col items-center justify-center">
				<div className="md:w-2/3 w-full flex items-center justify-center flex-col">
					<p dangerouslySetInnerHTML={{ __html: translate('welcomeMessage') }} className="font-anonymous w-9/12 md:w-full md:text-3xl pb-4 text-2xl text-center text-[#3E4261]"/>
					<p className="font-anonymous md:text-2xl px-4 text-xl text-center md:pr-8 md:pb-10 pb-6 text-[#3E4261]">
						{'>'} {desc}
					</p>
					<div className="hidden sm:flex w-full flex-row">
						<MenuItem colNumber={false} />
						<MenuItem colNumber={true} />
					</div>
				</div>
			</div>
			<div className="block sm:hidden flex-row w-2/3">
				<MenuItem colNumber={false} />
				<MenuItem colNumber={true} />
			</div>
		</div>
	);
};
