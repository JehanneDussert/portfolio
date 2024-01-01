import { GlobalWrapper } from "./Components/Global/GlobalWrapper";
import { Header } from "./Components/Global/Header";
import { WindowsManagement } from "./Components/Windows/WindowsManagement";

export const	Root = () => {
	return (
		<GlobalWrapper>
			<span className="lg:block hidden"><Header /></span>
			<WindowsManagement />
		</GlobalWrapper>
  )
}