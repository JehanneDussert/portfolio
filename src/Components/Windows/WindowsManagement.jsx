import { Window } from "./Window";
import photoBooth from "/photoJolie.jpg";
import { menuIcons } from "../../constants/menuIcons";
import { Settings } from "./Setting";
import { Terminal } from "./Terminal";

export const    WindowsManagement = ({ activeWindow, setActiveWindow }) => {
	const WebcamWindow = () => {
		return (
			<Window
				item={menuIcons[0]}
				extraClass="absolute top-0 left-0 h-fit"
				activeWindow={activeWindow}
				setActiveWindow={setActiveWindow}
			>
				<img src ={photoBooth} className="rounded-b-[5px]"/>
			</Window>
		);
	};
		
	const SettingsWindow = () => {
		return (
			<Window
				item={menuIcons[4]}
				extraClass="absolute top-1/2 right-0 transform -translate-y-3/5 h-1/5"
				activeWindow={activeWindow}
				setActiveWindow={setActiveWindow}
			>
				<Settings/>
			</Window>
		);
	};

	const	TerminalWindow = () => {
		return (
			<Window
				item={menuIcons[2]}
				extraClass="absolute top-1/7 right-1/2 transform -translate-y-1/5 h-3/5"
				activeWindow={activeWindow}
				setActiveWindow={setActiveWindow}
			>
				<Terminal/>
			</Window>
		)
	}

	const renderActiveWindow = (windowType) => {
		switch (windowType) {
			case 'webcam':
				return <WebcamWindow />;
			case 'settings':
				return <SettingsWindow />;
			case 'terminal':
				return <TerminalWindow />;
			default:
				return null;
		}
	};

	return <>
		{activeWindow.map((windowType, index) => <span key={index}>{renderActiveWindow(windowType)}</span>)}
	</>
}