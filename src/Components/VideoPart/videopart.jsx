import { useDarkMode } from "../../Context/darkmode"

export default function VideoPart() {
    const {isDarkMode} = useDarkMode();

    return (
        <div className={`flex ${isDarkMode ? "bg-black" : "bg-white"} pt-14 justify-center items-center flex-col relative`}>
            <iframe width="100%" height="900px" src="https://www.youtube.com/embed/7w_0wDFemUg?si=v72zjeAsyIh9-1US" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className={`rounded-[28px] absolute -bottom-24 shadow-topSide py-7 product805x:py-14 ${isDarkMode ? "bg-black" : "bg-white"} border-none outline-none flex flex-col gap-2 items-center w-[90%]`}>
                <img src="header-logo.svg" className="w-52 product805x:w-60" />
                <img src="video-part.png" className="w-48 product805x:w-52" />
            </div>
        </div>
    )
};
