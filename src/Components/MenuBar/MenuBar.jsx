import { menuIcons } from "../../constants/menuIcons";
import { Icon } from "./Icon";
import { IconsContainer } from "./IconsContainer";

export const    MenuBar = () => {
	return <div className="lg:w-fit w-full h-full flex flex-row lg:ml-10 lg:mr-auto lg:mt-0 lg:mb-auto items-center justify-center">
		<IconsContainer>
			{menuIcons.map((item, index) => {
				return <Icon 
					item={item}
					key={index}
				/>
			})}
		</IconsContainer>
	</div>
}