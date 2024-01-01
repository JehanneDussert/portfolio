import { Tabs } from "../Global/Tabs"

const	InstitutionTitle = ({ children }) => {
	return <div className="h-fit w-1/3 m-4 flex flex-row">
		<div className="mt-4 bg-gradient-to-r from-white via-[#dfdfdf] to-white w-3 h-3 rounded-full"/>
		<h1 className="text-3xl text-white ml-4 flex flex-row items-center w-fit">
			{children}
		</h1>
	</div>
}

const	Experience = ({ children }) => {
	return <div className="flex flex-row h-1/2">
		{children}
	</div>
}

const	Description = ({ title, date, description }) => {
	return <div className="flex flex-col w-2/3 m-4">
	<h2 className="text-white text-2xl">{title}</h2>
	<h3 className="text-white">{date}</h3>
	<p className="text-white text-justify">{description}</p>
</div>
}

export const    Experiences = () => {
	return <>
		<Experience>
			<InstitutionTitle>Direction Interministérielle du Numérique</InstitutionTitle>
			<Description title="Développeuse web" date="Août 2023 - Aujourd’hui" description="Développeuse sur le projet Albert, le chatGPT du service public."/>
		</Experience>
		<Experience>
			<InstitutionTitle>Ministère de l’Intérieur et des Outre-mer</InstitutionTitle>
			<Description title="Développeuse R&D" date="Septembre 2022 - juillet 2023" description="Création d’un jumeau numérique de la ville de Paris.
				Génération et extraction de données synthétiques 3D pour améliorer les performances d’algorithmes de computer vision (ex: détection de piétons).
				Management d’une équipe de deux développeurs et d’un game artist."/>
		</Experience>
		<Tabs />
	</>
}