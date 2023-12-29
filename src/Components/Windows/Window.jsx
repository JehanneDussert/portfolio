import Draggable from 'react-draggable';
import { useState } from "react";
import { WindowButtons } from './WindowButtons';

export const Window = ({ children, item }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);

  const handleClose = () => {
	setIsClosed(true);
  };

  return (
	<Draggable>
		{item.name === 'empty' ? 
		<>{children}</>
		:
		<div className={`opacity 0.5s ease-in-out flex lg:items-center lg:justify-center lg:h-full mt-0 mb-auto ${isClosed ? 'hidden' : ''} ${isMinimizing ? 'minimize-animation' : 'open-animation'}`}>
			<div className={`bg-gradient-to-r from-[#2c2c2c] via-[#6a6a6a] to-[#2c2c2c] rounded border border-black shadow-2xl ${isClosed ? 'minimize-animation' : ''}`}>
			<div className="flex flex-row">
				<WindowButtons 
					item={item.name}
					onClose={handleClose}
					setIsMinimizing={setIsMinimizing}
				/>
			</div>
			{children}
			</div>
		</div>}
	</Draggable>
  );
};