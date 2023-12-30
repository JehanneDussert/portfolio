import { useSelector } from "react-redux";
import { Typewriter } from "../Global/Typewriter";
import { TerminalDecoration } from "./Terminal";
import { bio } from "../../constants/bio";

export const    Camera = () => {
	const	echoCommand = "echo Hello World!";
	const	catCommand = "cat jehanne.txt";
	const	terminal = useSelector((state) => state.terminal);

	return <div className="h-full lg:w-[1100px] w-full bg-black rounded-b-[5px] flex flex-col py-2 overflow-y-auto">
		<TerminalDecoration>
			{!terminal.echoCompleted ?
				<Typewriter text={echoCommand} delay={150} isEcho={true}/> : <p className="text-white font-inconsolata">echo Hello World!</p>
			}
		</TerminalDecoration>
		{terminal.echoCompleted && <>
			<p className="text-white font-inconsolata ml-4">Hello World!</p>
			<TerminalDecoration>
				<Typewriter text={catCommand} delay={150} isEcho={false}/>
			</TerminalDecoration>
			{terminal.catCompleted && <><p className="text-white font-inconsolata mx-4 text-justify">
				{bio}
			</p>
			<TerminalDecoration></TerminalDecoration>
			</>}
		</>}
	</div>
}