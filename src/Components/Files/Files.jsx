import { filesButtons } from "../../constants/files";

export const Files = () => {
    return <div className="flex items-end justify-end">
        <div className="w-1/6 mt-6 mr-6">
        {filesButtons.map((icon, index) => (
            <button key={index} className="m-2"><img src={icon.img}/><p className="text-xs text-white">{icon.name}</p></button>
        ))}</div>
    </div>;
};