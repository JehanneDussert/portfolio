import tilde from "/terminalTilde.png";
import arrow from "/terminalArrow.png";
import { useSelector } from "react-redux";
import { Typewriter } from "../Global/Typewriter";

export const   TerminalDecoration = ({children}) => {
	return <div className="flex flex-row items-center h-fit ml-4">
		<div><img src={arrow} /></div>
		<div className="m-2"><img src={tilde} /></div>
		{children}
	</div>
}

export const    Terminal = () => {
	const	command = "echo Hello World!";
	const	terminal = useSelector((state) => state.terminal);

	return <div className="h-[600px] w-[1100px] bg-black rounded-b-[5px] flex flex-col py-2">
		<TerminalDecoration>
			{!terminal.echoCompleted ?
				<Typewriter text={command} delay={100} isEcho={true}/> : <p className="text-white font-inconsolata">echo Hello World!</p>
			}
		</TerminalDecoration>
		{terminal.echoCompleted && <>
			<p className="text-white font-inconsolata ml-4">Hello World!</p>
			<TerminalDecoration></TerminalDecoration>
		</>}
	</div>
}