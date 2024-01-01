import { experiences } from "../../constants/bio"
import { Tabs } from "../Global/Tabs"

const	InstitutionTitle = ({ children }) => {
	return <div className="h-fit m-2 flex flex-row">
		<h1 className="font-inconsolata lg:text-3xl text-[#e4e4e4] lg:ml-4 flex lg:flex-row items-center lg:w-fit">
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
	return <div className="flex flex-col lg:mx-4 m-2">
	<h2 className="text-[#e4e4e4] lg:text-2xl font-inconsolata">{title}</h2>
	<h3 className="text-[#898989] font-inconsolata">{date}</h3>
	<p className="text-[#e4e4e4] text-justify font-inconsolata">{description}</p>
</div>
}

const	Icon = ({ stack }) => {
	return <div className="flex flex-row lg:mx-4 m-2">
		{stack.map((techno, index) => (
			<div key={index} className="h-10 w-10 p-2 lg:m-2 my-1 mx-1 bg-white bg-opacity-20 rounded-lg flex items-center justify-center shadow-2xl">
				<img src={techno.img} className=""/>
			</div>
		))}
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
				<Icon stack={xp.stack}/>
			</Experience>
		))}
		<Tabs />
	</>
}