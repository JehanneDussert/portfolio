import { useState } from "react";
import { WindowButtons } from './WindowButtons';
import { useSwipeable } from 'react-swipeable';
import { useDispatch } from "react-redux";

export const Window = ({ children, item }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsClosed(true);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
	console.log('ici')
      dispatch({ type: 'SET_ACTIVE_WDW', nextWdw: 'experiences' });
      dispatch({ type: 'RESET_TERMINAL' });
    },
    onSwipedRight: () => {
		console.log('ici la')
      dispatch({ type: 'SET_ACTIVE_WDW', nextWdw: 'terminal' });
      dispatch({ type: 'RESET_TERMINAL' });
    },
  });

  return (
    <>
      {item.name === 'empty' ? 
        <>{children}</>
        :
        <div
          {...handlers}
          className={`global-window opacity 0.5s ease-in-out ${isClosed ? 'lg:hidden' : ''} ${isMinimizing ? 'lg:minimize-animation' : 'open-animation'}`}
        >
          <div className="flex flex-row">
            <WindowButtons 
              item={item.name}
              onClose={handleClose}
              setIsMinimizing={setIsMinimizing}
            />
          </div>
          <div className="h-full w-full bg-black rounded-b-[5px] flex flex-col py-2 overflow-y-auto">
            {children}
          </div>
        </div>
      }
    </>
  );
};
