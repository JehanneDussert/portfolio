import { MenuBar } from "./Components/MenuBar/MenuBar"
import { useSelector } from "react-redux"

export const	Root = () => {
	const	window = useSelector((state) => state.window);

	return (
		<div className={`w-screen h-screen ${window.bg} flex flex-col`}>
			<MenuBar />
		</div>
  )
}
