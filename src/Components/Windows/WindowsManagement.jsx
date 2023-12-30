import { Window } from "./Window";
import { menuIcons } from "../../constants/menuIcons";
import { Terminal } from "./Terminal";
import { useSelector } from "react-redux";
import { Camera } from "./Camera";
import { MenuBar } from "../MenuBar/MenuBar";
import { redirect } from "../../utils";
import { Experiences } from "./Experiences";
import { Empty } from "./Empty";

export const WindowsManagement = () => {
	const	activeWdw = useSelector((state) => state.window.activeWdw);

	const WebcamWindow = () => {
		return (
			<>
				<Window item={menuIcons[0]}>
					<Camera />
				</Window>
			</>
		);
	};

	const	ExperiencesWindow = () => {
		return (
			<Window item={menuIcons[2]}>
				<Experiences />
			</Window>
		);
	};

	const EmptyWindow = () => {
		return (
			<Window item={menuIcons[7]}>
				<Empty />
			</Window>
		);
	};

	const renderactiveWdw = (windowType) => {
		switch (windowType) {
			case 'webcam':
				return <WebcamWindow />;
			case 'cv':
				return <WebcamWindow />;
			case 'linkedin': {
				redirect('linkedin');
				return <WebcamWindow />;
			}
			case 'communication': {
				redirect('communication');
				return <WebcamWindow />
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
		<div className="flex lg:h-4/5 lg:flex-row flex-col h-fit">
			<div className="lg:flex-1"></div>
			<div className="lg:flex-2 lg:h-full">
				{renderactiveWdw(activeWdw)}
			</div>
			<div className="lg:flex-1 lg:mt-0 lg:mb-auto mb-0 mt-auto h-fit">
				<MenuBar />
			</div>
		</div>
	);
};