import { useDispatch } from "react-redux";
import home from "/home.png";
import link from "/link.png";
import code from "/code.png";

export const    Header = () => {
	const	dispatch = useDispatch();

	const	handleClick = () => {
		dispatch({ type: 'SET_ACTIVE_WDW', nextWdw: 'webcam' });
		dispatch({ type: 'RESET_TERMINAL' });
	}

	return <div className="lg:m-5 mx-2 flex flex-row">
		<button onClick={handleClick} className="items-center justify-center flex"><img src={home} className="h-1/2 w-auto"/></button>
		<div className="mr-0 ml-auto flex flex-row">
			<a href="https://www.malt.fr/profile/jehannedussert" target="_blank" className="items-center justify-center flex"><img src={link} className="h-1/3 w-auto"/><h3 className="text-white ml-2">Tarifs</h3></a>
			<a href="https://gitlab.com/JehanneDussert" target="_blank" className="items-center justify-center flex"><img src={code} className="h-1/3 w-auto"/><h3 className="text-white ml-2">Gitlab</h3></a>
			<a href="https://github.com/JehanneDussert/" target="_blank" className="items-center justify-center flex"><img src={code} className="h-1/3 w-auto"/><h3 className="text-white ml-2">Github</h3></a>
		</div>
	</div>
}