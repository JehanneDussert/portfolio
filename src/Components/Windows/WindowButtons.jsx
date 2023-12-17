export const    WindowButtons = ({ activeWindow, setActiveWindow, item }) => {
    const   handleClose = () => {
        const   updatedWdw = activeWindow.filter(wdw => wdw != item);

        setActiveWindow(updatedWdw);
    }

    return <div>
        <button title="Fermer" onClick={handleClose} className="bg-[#FF0000] w-4 h-4 mx-1 my-2 rounded-full">
        </button>
        <button title="Réduire" className="bg-[#FFC700] w-4 h-4 rounded-full mx-1">
        </button>
        <button title="Agrandir" className="bg-[#33FF00] w-4 h-4 mx-1 my-2 rounded-full">
        </button>
    </div>
}