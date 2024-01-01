import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const	Typewriter = ({ text, delay, isEcho }) => {
	const	[currentText, setCurrentText] = useState('');
	const	[currentIndex, setCurrentIndex] = useState(0);
	const	dispatch = useDispatch();
  
	useEffect(() => {
		if (currentIndex < text.length) {
			const	timeout = setTimeout(() => {
				setCurrentText(prevText => prevText + text[currentIndex]);
				setCurrentIndex(prevIndex => prevIndex + 1);
		  	}, delay);
	  
		  	return () => clearTimeout(timeout);
		}
		else if (isEcho)
			dispatch({ type: 'SET_ECHO_COMPLETED' });
		else
			dispatch({ type: 'SET_CAT_COMPLETED' });
	  }, [currentIndex, delay, text]);
  
	return <>
        <p className="text-white font-inconsolata text-xl">{currentText}</p>    
    </>
};