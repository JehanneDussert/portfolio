import React from "react";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { LanguageProvider } from "./LanguageContext";

export const Root = () => {
	return (
		<LanguageProvider>
			<div className="h-screen w-screen flex flex-col">
				<Header />
				<div className="flex-grow">
					<Card />
				</div>
				<Footer />
			</div>
		</LanguageProvider>
	);
};
