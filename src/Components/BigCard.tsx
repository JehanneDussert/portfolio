import React from "react";
import { MenuItem } from "../type";
import { BackHome } from "./BackHome";

export const BigCard = ({ items }: { items: MenuItem[] }) => {
	return (
        <div className="w-full h-full sm:py-0 py-4 flex flex-col justify-center items-center">
            <div className="md:w-1/2 w-11/12 bg-red-200">
                {items.map(
                    (item, index) =>
                            <button
                                type="button"
                                className="flex flex-row p-2 sm:pb-2 sm:my-4 w-full"
                                key={index}
                                onClick={item.onClick}
                            >
                                <div className="shadow-xl hover:shadow-2xl flex flex-row w-full rounded-xl border">
                                <div className="bg-[#F7F7F7] flex justify-center items-center rounded-l-xl">
                                    <img
                                        src={item.icon}
                                        alt={item.alt}
                                        width="80"
                                        height="80"
                                        className="p-2"
                                    />
                                </div>
                                <div className="text-justify md:p-0 p-4 pl-2 flex justify-center w-full flex-col">
                                    <p key={index} className="font-anonymous font-bold sm:text-sm text-xs">
                                        {item.title}
                                    </p>
                                    <p key={index} className="font-anonymous sm:text-sm text-xs">
                                        {item.subtitle}
                                    </p>
                                </div></div>
                            </button>
                )}
            </div>
			<BackHome />
        </div>
	);
};
