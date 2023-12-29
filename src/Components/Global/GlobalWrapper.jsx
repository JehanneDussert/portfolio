import { useSelector } from "react-redux"

export const	GlobalWrapper = ({ children }) => {
	const	window = useSelector((state) => state.window);

	return (
		<div className={`w-screen h-screen bg-gradient-to-r from-[#0c0c0c] via-[#232323] to-[#0c0c0c] flex flex-col`}>
			{children}
		</div>
  )
}