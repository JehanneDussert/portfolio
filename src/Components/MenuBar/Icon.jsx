import { download, sendMail } from "../../utils";

export const	Icon = ({ item, activeWindow, setActiveWindow }) => {

	const	handleClick = () => {
		if (item.name === "contact")
			return sendMail();
		else if (item.name === 'cv')
			download();
		!activeWindow.includes(item.name) && setActiveWindow([...activeWindow, item.name]);
	};

	return <button onClick={handleClick} className="mx-4 my-2">
		<img src={item.img} title={item.title}/>
	</button>
}