import { Tabs } from "../Global/Tabs"

const	InstitutionTitle = ({ children }) => {
	return <div className="h-fit lg:w-1/3 lg:m-4 m-2 flex flex-row">
		<div className="lg:block hidden lg:mt-4 mt-2 bg-gradient-to-r from-white via-[#dfdfdf] to-white lg:w-3 lg:h-3 w-2 h-2 rounded-full"/>
		<h1 className="lg:text-3xl text-white lg:ml-4 flex lg:flex-row items-center lg:w-fit">
			{children}
		</h1>
	</div>
}

const	Experience = ({ children }) => {
	return <div className="flex lg:flex-row flex-col lg:h-1/2">
		{children}
	</div>
}

const	Description = ({ title, date, description }) => {
	return <div className="flex flex-col lg:w-2/3 lg:m-4 m-2">
	<h2 className="text-white lg:text-2xl">{title}</h2>
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