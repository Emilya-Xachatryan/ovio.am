import { telephonyAm } from "../../../dataAm";
import { telephonyEn } from "../../../dataEn";
import { telephonyRu } from "../../../dataRu";
import { useDarkMode } from "../../Context/darkmode"
import { useLanguage } from "../../Context/language";
import { GiRotaryPhone } from "react-icons/gi";

export default function Telephony() {
    const {isDarkMode} = useDarkMode();
    const {language} = useLanguage();    

    const data = language == "am" ? telephonyAm : language == "ru" ? telephonyRu : language == "en" ? telephonyEn : null

    return (
        <div>
            <div>
                <div className={`flex ${isDarkMode ? "bg-black" : "bg-[#53079D]"} h-[710px] product590x:h-[800px] items-center justify-center overflow-hidden product1255x:justify-start gap-11`}>
                    <div className="w-[70%] text-center items-center product590x:text-left product590x:items-start product1255x:w-[40%] product1255x:pl-20 product1370x:pl-32 flex flex-col gap-9 justify-center">
                        <span className="text-5xl product590x:text-6xl text-[#04eed2]">{data.section.title}</span>
                        <p className="font-normal text-white">{data.section.desc}</p>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${data.section.imageUrl})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "60%",
                            height: "140%", 
                        }}
                        className="rounded-custom hidden product1255x:block"
                    >
                    </div>
                </div>
            </div>
            <div className={`p-10 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
                <div className="flex flex-col gap-10 text-[42px] font-[500] items-center">
                    <div className="w-[80%]">
                        <h1 className="text-3xl product460x:text-[42px] text-center product460x:text-left">{data.section.title}</h1>
                    </div>
                    <div className={`h-[530px] ${isDarkMode ? "border borders-solid border-[#2b2b2b]" : "border-none"} shadow-phoneService w-full product460x:w-[80%] flex flex-col product1100x:h-[265px] product1100x:flex-row rounded-xl`}>
                        <div style={{
                            backgroundImage: `url(${data.content.imageUrl})`
                        }} className="w-full h-[40%] product1100x:w-[40%] rounded-l-xl rounded-bl-lg-xl product1100x:h-full"></div>
                        <div className="w-full product1100x:w-[60%] py-6 pr-5 flex pl-10 flex-col gap-5 product1100x:gap-0 justify-between">
                            <h1 className="text-3xl font-semibold">{data.content.title}</h1>
                            <div className="flex gap-3 items-center">
                                <GiRotaryPhone className={`text-4xl ${isDarkMode ? "text-[#04eed2]" : "text-[#53079d]"}`} />
                                <div className="flex flex-col text-sm">
                                    <span>{data.content.content1[0]}</span>
                                    <span>{data.content.content1[1]}</span>
                                </div>
                            </div>
                            <div className="flex  flex-col product1100x:flex-row product1100x:items-end justify-between">
                                <div className="flex flex-row gap-5 product1100x:gap-3 items-center product1100x:flex-col">
                                    <span className="text-sm">{data.content.content2[0]}</span>
                                    <span className="text-2xl product1100x:text-[42px]">{data.content.content2[1]}</span>
                                </div>
                                <div>
                                    <button className={`border-none w-full outline-none ${isDarkMode ? "bg-[#04eed2] text-black" : "bg-[#53079d] text-white"} tracking-wide  rounded-xl py-3 product1100x:py-4 product1100x:px-24 hover:brightness-[140%] transition-all duration-300 text-sm font-semibold`}>
                                        {data.content.button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}