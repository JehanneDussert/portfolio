import { menuIcons } from "../../constants/menuIcons";
import { Icon } from "./Icon";
import { useState } from "react";
import { IconsContainer } from "./IconsContainer";
import { WindowsManagement } from "../Windows/WindowsManagement";

export const    MenuBar = () => {
    const   [activeWindow, setActiveWindow] = useState([]);

    return <div className="w-full h-full flex flex-col">
        <WindowsManagement
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
        />
        <IconsContainer>
            {menuIcons.map((item, index) => {
                return <Icon 
                    item={item}
                    activeWindow={activeWindow}
                    setActiveWindow={setActiveWindow}
                    key={index}
                />
            })}
        </IconsContainer>
    </div>
}