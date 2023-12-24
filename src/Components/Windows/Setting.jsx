import folder from "/folder.png";
import color from "/color.png";
import openFolder from "/openFolder.png";
import { useDispatch, useSelector } from "react-redux";
import { bgsColors, bgsImg } from "../../constants/bgs";

const   ColorsSettings = ({ bgType }) => {
	const	dispatch = useDispatch();
	const	extraClass = "bg-black bg-opacity-10 rounded-[2px]";

	const	handleClick = (type) => {
		bgType !== type && dispatch({ type: 'SET_WDW_BG_TYPE', nextBgType: type });
	}

	return <div className="flex flex-col justify-center border-r-white items-center h-auto mx-4">
		<button onClick={() => handleClick('color')} className={`flex justify-center items-center flex-col px-1 my-1 ${bgType === 'color' ? extraClass : ''}`}>
			<img src={color} className="h-2/3"/>
			<p className="text-xs">Couleurs</p>
		</button>
		<button onClick={() => handleClick('img')} className={`flex justify-center items-center flex-col px-1 my-1 ${bgType === 'img' ? extraClass : ''}`}>
			<img src={bgType === 'img' ? openFolder : folder} className="h-2/3"/>
			<p className="text-xs font-inconsolata">Images</p>
		</button>
	</div>
}

const   ImagesSettings = ({ bgType }) => {
	const   dispatch = useDispatch();
	const	displayBgs = bgType === 'color' ? bgsColors : bgsImg;

	const   handleClick = (color) => {
		dispatch({ type: 'SET_WDW_BG', nextBg: color });
	}
	
	return (
		<div className="flex flex-wrap justify-center items-center w-full h-full">
			{displayBgs.map((bg, index) => (
				<button key={index} onClick={() => handleClick(bg.color ? bg.color : bg.img)} className={`w-1/4 h-full mx-4 justify-center items-center`}>
					{bg.color ? <div className={`${bg.color} h-1/2 w-full`}></div> : <img className="h-fit w-full" src={bg.img} />}
			  	</button>
			))}
		</div>
	);
}

export const    Settings = () => {
	const	bgType = useSelector((state) => state.window.bgType);

	return <div className="bg-[#D9D9D9] w-full h-full rounded-b-[5px] flex flex-row items-center justify-center">
		<ColorsSettings bgType={bgType}/>
		<ImagesSettings bgType={bgType}/>
	</div>
}