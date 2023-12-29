import temporary from "/temporary.mp4";

export const    Camera = () => {
    return <div className="h-[600px] w-[1100px]">
        <video src={temporary} autoPlay={true} loop={true} className="rounded-b-[5px]"/>
    </div>
}