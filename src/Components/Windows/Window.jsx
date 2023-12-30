import { useState } from "react";
import { WindowButtons } from './WindowButtons';

export const Window = ({ children, item }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);

  const handleClose = () => {
	setIsClosed(true);
  };

  return (
	<>
		{item.name === 'empty' ? 
		<>{children}</>
		:
		<div className={`global-window opacity 0.5s ease-in-out ${isClosed ? 'lg:hidden' : ''} ${isMinimizing ? 'lg:minimize-animation' : 'open-animation'}`}>
			<div className="flex flex-row">
				<WindowButtons 
					item={item.name}
					onClose={handleClose}
					setIsMinimizing={setIsMinimizing}
				/>
			</div>
			{children}
		</div>}
	</>
  );
};