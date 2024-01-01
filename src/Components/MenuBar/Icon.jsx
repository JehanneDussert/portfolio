import { useDispatch } from "react-redux";
import { download, sendMail } from "../../utils";
import { useState } from "react";

export const	Icon = ({ item }) => {
	const	[isHovered, setIsHovered] = useState(false);
	const	dispatch = useDispatch();

	const	handleClick = () => {
		if (item.name === "contact")
			return sendMail();
		else if (item.name === "cv")
			return download();
		dispatch({ type: 'SET_ACTIVE_WDW', nextWdw: item.name });
		dispatch({ type: 'RESET_TERMINAL' });
	};
	
	const	handleIsHovered = () => {
		setIsHovered(!isHovered);
	}

	return <div className="flex flex-row">
		<button onClick={handleClick} onMouseEnter={handleIsHovered} onMouseLeave={handleIsHovered} className="hover:bg-opacity-40 lg:mx-4 lg:my-2 my-1 mx-1 bg-white bg-opacity-20 rounded-lg flex items-center justify-center shadow-2xl">
			<img src={item.img} className="h-1/2"/>
		</button>
		{isHovered && (
			<div className="hidden lg:flex items-center justify-center shadow-2xl">
				<div className="bg-white bg-opacity-10 h-fit rounded-lg">
				<p className="text-white m-2">{item.title}</p>
				</div>
			</div>
		)}
	</div>
}