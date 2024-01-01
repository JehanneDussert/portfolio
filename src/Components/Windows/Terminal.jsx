import tilde from "/terminalTilde.png";
import arrow from "/terminalArrow.png";
import { useSelector } from "react-redux";
import { Typewriter } from "../Global/Typewriter";
import { bio, shortBio } from "../../constants/bio";
import { Tabs } from "../Global/Tabs";

const   TerminalDecoration = ({children}) => {
	return <div className="flex flex-row items-center h-fit ml-4">
		<div><img src={arrow} /></div>
		<div className="m-2"><img src={tilde} /></div>
		{children}
	</div>
}

export const    Terminal = () => {
	const	echoCommand = "echo Hello World!";
	const	catCommand = "cat jehanne.txt";
	const	terminal = useSelector((state) => state.terminal);

	return <>
		<TerminalDecoration>
			{!terminal.echoCompleted ?
				<Typewriter text={echoCommand} delay={150} isEcho={true}/> : <p className="text-white font-inconsolata text-xl">echo Hello World!</p>
			}
		</TerminalDecoration>
		{terminal.echoCompleted && <>
			<p className="text-white font-inconsolata ml-4 text-xl">Hello World!</p>
			<TerminalDecoration>
				<Typewriter text={catCommand} delay={150} isEcho={false}/>
			</TerminalDecoration>
			{terminal.catCompleted && <><p className="text-white font-inconsolata mx-4 text-justify text-xl">
				<span className="lg:block hidden">{bio}</span>
				<span className="lg:hidden block">{shortBio}</span>
			</p>
			<Tabs />
			</>}
		</>}
	</>
}