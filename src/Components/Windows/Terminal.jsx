import tilde from "/terminalTilde.png";
import arrow from "/terminalArrow.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const   TerminalDecoration = ({children}) => {
	return <div className="flex flex-row items-center h-fit ml-4">
		<div><img src={arrow} /></div>
		<div className="m-2"><img src={tilde} /></div>
		{children}
	</div>
}

const Typewriter = ({ text, delay, setEchoCompleted }) => {
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
		else
			dispatch({ type: 'SET_ECHO_COMPLETED' });
	  }, [currentIndex, delay, text]);
  
	return <p className="text-white font-inconsolata">{currentText}</p>;
};

export const    Terminal = () => {
	const	command = "echo Hello World!";
	const	terminal = useSelector((state) => state.terminal);

	return <div className="bg-black w-full h-full rounded-b-[5px] border border-b-[#D9D9D9] flex flex-col py-2">
		<TerminalDecoration>
			{!terminal.echoCompleted ?
				<Typewriter text={command} delay={100}/> : <p className="text-white font-inconsolata">echo Hello World!</p>
			}
		</TerminalDecoration>
		{terminal.echoCompleted && <>
			<p className="text-white font-inconsolata ml-4">Hello World!</p>
			<TerminalDecoration></TerminalDecoration>
		</>}
	</div>
}