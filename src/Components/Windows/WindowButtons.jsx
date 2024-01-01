import { useDispatch } from "react-redux";

export const WindowButtons = ({ item, onClose, setIsMinimizing }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
		if (item === "terminal")
			dispatch({ type: 'RESET_TERMINAL' });
	  	dispatch({ type: 'CLOSE_ACTIVE_WDW', toDelete: item });
		dispatch({ type: 'SET_ACTIVE_WDW', nextWdw: '' });
	};

	const	handleMinimize = () => {
		setIsMinimizing(true);
	  	dispatch({ type: 'RESET_TERMINAL' });
		setTimeout(() => {
	  		dispatch({ type: 'CLOSE_ACTIVE_WDW', toDelete: item });
	  		onClose();
		}, 500);
	}

  return (
	<div className={`flex items-center justify-center my-2`}>
	  <button title="Fermer" onClick={handleClose} className="bg-gradient-to-r from-[#FF0000] via-[#930d0d] to-[#FF0000] w-3 h-3 mx-1 ml-2 rounded-full" />
	  <button title="Réduire" onClick={handleMinimize} className="bg-gradient-to-r from-[#FFC700] via-[#9c7d0a] to-[#FFC700] w-3 h-3 rounded-full mx-1"/>
	<button title="Agrandir" className="bg-gradient-to-r from-[#33FF00] via-[#259209] to-[#33FF00] w-3 h-3 mx-1 rounded-full"/>
	</div>
  );
};
