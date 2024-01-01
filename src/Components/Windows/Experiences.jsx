import { experiences } from "../../constants/bio"
import { Tabs } from "../Global/Tabs"

const	InstitutionTitle = ({ children }) => {
	return <div className="h-fit lg:w-1/3 lg:m-4 m-2 flex flex-row">
		<div className="lg:block hidden lg:mt-4 mt-2 bg-gradient-to-r from-white via-[#dfdfdf] to-white lg:w-3 lg:h-3 w-2 h-2 rounded-full"/>
		<h1 className="font-inconsolata lg:text-3xl text-white lg:ml-4 flex lg:flex-row items-center lg:w-fit">
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
	<h2 className="text-white lg:text-2xl font-inconsolata">{title}</h2>
	<h3 className="text-white font-inconsolata">{date}</h3>
	<p className="text-white text-justify font-inconsolata">{description}</p>
</div>
}

export const    Experiences = () => {
	return <>
		{experiences.map((xp, index) => (
			<Experience key={index}>
				<InstitutionTitle>{xp.institutionTitle}</InstitutionTitle>
				<Description
					title={xp.role}
					date={xp.date}
					description={xp.description}
				/>
			</Experience>
		))}
		<Tabs />
	</>
}