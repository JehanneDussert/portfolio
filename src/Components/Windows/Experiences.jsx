import { experiences } from "../../constants/bio"
import { Tabs } from "../Global/Tabs"

const	InstitutionTitle = ({ children }) => {
	return <div className="h-fit m-2 flex flex-row">
		<h1 className="font-inconsolata lg:text-3xl text-white lg:ml-4 flex lg:flex-row items-center lg:w-fit">
			{children}
		</h1>
	</div>
}

const	Experience = ({ children }) => {
	return <div className="flex flex-col lg:m-4">
		{children}
	</div>
}

const	Description = ({ title, date, description }) => {
	return <div className="flex flex-col lg:m-4 m-2">
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