import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Experiences } from "./Pages/Experiences";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { LanguageProvider } from "./LanguageContext";
import { Education } from "./Pages/Education";

export const Root = () => {
  return (
    <Router>
      <LanguageProvider>
        <div className="h-screen w-screen flex flex-col">
          <Header />
          <div className="flex-grow">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/experiences" element={<Experiences />} />
				<Route path="/education" element={<Education />} />
			</Routes>
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
};