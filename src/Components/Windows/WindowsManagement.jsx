import { Window } from "./Window";
import { menuIcons } from "../../constants/menuIcons";
import { useSelector } from "react-redux";
import { Terminal } from "./Terminal";
import { MenuBar } from "../MenuBar/MenuBar";
import { redirect } from "../../utils";
import { Experiences } from "./Experiences";
import { Empty } from "./Empty";
import { Header } from "../Global/Header";

export const WindowsManagement = () => {
	const	activeWdw = useSelector((state) => state.window.activeWdw);

	const TerminalWindow = () => {
		return (
			<Window item={menuIcons[0]}>
				<Terminal />
			</Window>
		);
	};

	const	ExperiencesWindow = () => {
		return (
			<Window item={menuIcons[6]}>
				<Experiences />
			</Window>
		);
	};

	const EmptyWindow = () => {
		return (
			<Window item={menuIcons[5]}>
				<Empty />
			</Window>
		);
	};

	const renderactiveWdw = (windowType) => {
		switch (windowType) {
			case 'terminal':
				return <TerminalWindow />;
			case 'cv':
				return <TerminalWindow />;
			case 'linkedin': {
				redirect('linkedin');
				return <TerminalWindow />;
			}
			case 'communication': {
				redirect('communication');
				return <TerminalWindow />
			}
			case 'experiences':
				return <ExperiencesWindow />;
			case '':
				return <EmptyWindow />;
			default:
				return null;
		}
	};

	return (
		<div className="flex lg:h-4/5 lg:flex-row flex-col h-full">
			<div className="lg:flex-1">
				<span className="bloack lg:hidden"><Header /></span>
			</div>
			<div className="lg:flex-2 flex items-center justify-center h-full lg:w-8/12">
				{renderactiveWdw(activeWdw)}
			</div>
			<div className="lg:flex-1 lg:mt-0 lg:mb-auto mt-4 mb-2">
				<MenuBar />
			</div>
		</div>
	);
};