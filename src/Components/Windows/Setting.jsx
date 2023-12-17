import folder from "/folder.png";
import color from "/color.png";
import { useDispatch } from "react-redux";

const   ColorsSettings = () => {

    return <div className="flex flex-col justify-center border-r-white items-center h-auto mx-4">
        <div className="flex justify-center items-center flex-col">
            <img src={color} className="h-2/3"/>
            <p className="text-xs">Couleurs</p>
        </div>
        <div className="flex justify-center items-center flex-col">
            <img src={folder} className="h-2/3"/>
            <p className="text-xs font-inconsolata">Images</p>
        </div>
    </div>
}

const   ImagesSettings = () => {
    const   dispatch = useDispatch();

    const   handleClick = (color) => {
        dispatch({ type: 'SET_WDW_BG', nextBg: color });
    }
    return <div className="w-full flex flex-col h-full">
    <div className="flex justify-center items-center w-full h-1/2">
        <button onClick={() => handleClick("bg-black")} className="bg-black w-1/3 h-2/3 mx-4"></button>
        <button onClick={() => handleClick("bg-[#0038FF]")} className="bg-[#0038FF] w-1/3 h-2/3 mx-4"></button>
        <button onClick={() => handleClick("bg-[#F00]")} className="bg-[#F00] w-1/3 h-2/3 mx-4"></button>
    </div>
    <div className="flex justify-center items-center w-full h-1/2">
        <button className="bg-red-600 w-1/3 h-2/3 mx-4"></button>
        <button className="bg-yellow-600 w-1/3 h-2/3 mx-4"></button>
        <button className="bg-green-600 w-1/3 h-2/3 mx-4"></button>
    </div>
</div>
}

export const    Settings = () => {
    return <div className="bg-[#D9D9D9] w-full h-3/4 flex flex-row">
        <ColorsSettings/>
        <ImagesSettings/>
    </div>
}