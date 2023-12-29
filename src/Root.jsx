import { GlobalWrapper } from "./Components/Global/GlobalWrapper";
import { Header } from "./Components/Global/Header";
import { WindowsManagement } from "./Components/Windows/WindowsManagement";

export const	Root = () => {
	return (
		<GlobalWrapper>
			<Header />
			<WindowsManagement />
		</GlobalWrapper>
  )
}