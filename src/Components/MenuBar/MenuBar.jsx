import { menuIcons } from "../../constants/menuIcons";
import { Icon } from "./Icon";
import { IconsContainer } from "./IconsContainer";

export const    MenuBar = () => {
	return <div className="menu-bar">
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