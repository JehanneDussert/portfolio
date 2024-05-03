import React from "react";
import { useNavigate } from "react-router-dom";

export const BackHome = () => {
	const	navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

	return (
        <button className="text-3xl md:pt-4 pt-8" onClick={handleClick}>🔙</button>
	);
};