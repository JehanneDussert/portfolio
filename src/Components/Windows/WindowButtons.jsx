import { useDispatch } from "react-redux";

export const    WindowButtons = ({ activeWindow, setActiveWindow, item }) => {
    const   dispatch = useDispatch();

    const   handleClose = () => {
        const   updatedWdw = activeWindow.filter(wdw => wdw != item);

        if (item === "terminal")
            dispatch({ type: 'RESET_TERMINAL' });
        setActiveWindow(updatedWdw);
    }

    return <div className="flex items-center justify-center my-2">
        <button title="Fermer" onClick={handleClose} className="bg-[#FF0000] w-3 h-3 mx-1 ml-2 rounded-full">
        </button>
        <button title="Réduire" className="bg-[#FFC700] w-3 h-3 rounded-full mx-1">
        </button>
        <button title="Agrandir" className="bg-[#33FF00] w-3 h-3 mx-1 rounded-full">
        </button>
    </div>
}