import folder from "/folder.png";
import file from "/file.png";
import micro from "/micro.png";
import solidarity from "/solidarity.png";
import { download, explore } from "../utils";

export const    filesButtons = (activeWdw, dispatch) => [
    {
        name: "CV-fr",
        img: file,
		onClick: download,
    },
	{
		name: "Expériences",
		img: folder,
        onClick: () => explore('experience', activeWdw, dispatch),
	},
	{
		name: "Formations",
		img: folder
	},
    {
        name: "CV-en",
        img: file,
		onClick: download,
    },
    {
        name: "Associatif",
        img: solidarity
    },
    {
        name: "Communication",
        img: micro
    },
]