import React from "react";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";

export const Root = () => {
	return (
		<div className="h-screen w-screen flex flex-col">
			<Header />
			<div className="flex-grow">
				<Card />
			</div>
		</div>
	);
};
