import { WindowButtons } from "./WindowButtons";

export const Window = ({ children, item, activeWindow, setActiveWindow, extraClass }) => {
    return (
        <div className={`window bg-[#C9C5C5] w-1/3 h-2/3 rounded m-10 ${extraClass}`}>
            <div className="flex flex-row">
				<WindowButtons
					item={item.name}
					activeWindow={activeWindow}
					setActiveWindow={setActiveWindow}
				/>
				<p className="w-4/5 flex justify-center items-center font-inconsolata">{item.title}</p>
            </div>
            {children}
        </div>
    );
};