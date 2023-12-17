import { Window } from "./Window";
import photoBooth from "/photoJolie.jpg";
import { menuIcons } from "../../constants/menuIcons";
import { Settings } from "./Setting";

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
                extraClass="absolute top-1/2 right-0 transform -translate-y-3/5 h-1/3"
                activeWindow={activeWindow}
                setActiveWindow={setActiveWindow}
            >
                <Settings/>
            </Window>
        );
    };

    const renderActiveWindow = (windowType) => {
        switch (windowType) {
            case 'webcam':
                return <WebcamWindow />;
            case 'settings':
                return <SettingsWindow />;
            default:
                return null;
        }
    };

    return <>
        {activeWindow.map((windowType) => renderActiveWindow(windowType))}
    </>
}