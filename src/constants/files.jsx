import folder from "/folder.png";
import file from "/file.png";
import micro from "/micro.png";
import solidarity from "/solidarity.png";
import { download } from "../utils";

export const    filesButtons = [
    {
        name: "CV-fr",
        img: file,
		onClick: download,
    },
	{
		name: "Expériences",
		img: folder
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