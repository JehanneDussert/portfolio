import { filesButtons } from "../../constants/files";

export const Files = () => {
	return <div className="flex items-end justify-end">
		<div className="w-fit mt-6 mr-6 grid grid-cols-3 gap-4">
		{filesButtons.map((icon, index) => (
			<button key={index} onClick={icon.onClick} className="flex flex-col items-center justify-center"><img src={icon.img}/><p className="text-xs text-white">{icon.name}</p></button>
		))}</div>
	</div>;
};