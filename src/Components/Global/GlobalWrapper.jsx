import { useSelector } from "react-redux";

export const GlobalWrapper = ({ children }) => {
	const window = useSelector((state) => state.window);

	return (
		<div className={`w-screen h-screen flex flex-col relative overflow-hidden bg-gradient-to-r from-[#000000] via-[#2c2c2c] to-[#000000] justify-center items-center`}>
			<video
				autoPlay
				loop
				muted
				className="absolute top-0 left-0 object-cover w-full h-full"
			>
				<source src="/temporary.mp4" type="video/mp4" />
				Votre navigateur ne supporte pas la lecture de vidéos.
			</video>
			<div className="relative z-10 flex-1 lg:w-full w-11/12">
				{children}
			</div>
		</div>
	);
};
