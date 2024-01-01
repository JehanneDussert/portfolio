import { useDispatch, useSelector } from "react-redux"

export const Tabs = () => {
	const	window = useSelector((state) => state.window.activeWdw);
	const	dispatch = useDispatch();
	const	tabTitle = window === 'terminal' ? "Suivant" : "Précédent";

	const	handleClick = () => {
		const	nextWdw = window === 'terminal' ? 'experiences' : 'terminal';

		dispatch({ type: 'SET_ACTIVE_WDW', nextWdw: nextWdw });
		dispatch({ type: 'RESET_TERMINAL' });
	}

	return <div className="h-full">
		<div className="lg:hidden w-full  flex items-center justify-center">
			<div className="bg-gradient-to-r from-white via-[#dfdfdf] to-white w-1 h-1 rounded-full mx-2"/>
			<div className="bg-gradient-to-r from-white via-[#4a4a4a] to-white w-1 h-1 rounded-full mx-2"/>
		</div>
		<div className="hidden w-full lg:flex items-end justify-end h-full">
			<button onClick={handleClick} className="bg-gradient-to-r from-white via-[#dfdfdf] to-white mx-2 text-hite p-2">{tabTitle}</button>
		</div>
	</div>
}