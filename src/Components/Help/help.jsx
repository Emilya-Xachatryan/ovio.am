import { helpItemsAm } from "../../../dataAm";
import { helpItemsEn } from "../../../dataEn";
import { helpItemsRu } from "../../../dataRu";
import { useDarkMode } from "../../Context/darkmode";
import { useLanguage } from "../../Context/language";

export default function Help() {
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    const data = language == "am" ? helpItemsAm : language == "ru" ? helpItemsRu : language == "en" ? helpItemsEn : null;

    return (
        <div className="w-full mt-14 overflow-hidden bg-slate-300">
            <div className={`flex h-[710px] ${isDarkMode ? "bg-black" : "bg-[#53079d]"} product590x:h-[625px] items-center justify-center product1255x:justify-start gap-11`}>
                <div className="w-[70%] text-center items-center product590x:text-left product590x:items-start product1255x:w-[40%] product1255x:pl-20 product1370x:pl-32 flex flex-col gap-9 justify-center">
                    <span className="text-5xl product590x:text-6xl text-[#04eed2]">{data.imgTitle}</span>
                    <p className="font-normal text-white">{data.imgDesc}</p>
                </div>
                <div
                    style={{
                        backgroundImage: `url(/Help/help-bg.png)`,
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
            <div className={`flex flex-col items-center ${isDarkMode ? "bg-black text-white" : "bg-gray-50 text-black"} py-14 relative gap-16`}>
                <div className="flex flex-col gap-8 w-[95%] product1200x:w-[80%]">
                    <h1 className="text-3xl font-semibold">{data.title}</h1>
                    <p className="-tracking-tight">{data.desc}</p>
                </div>
                <div className="flex justify-center w-[95%] product1200x:w-[80%]">
                    <div className="grid grid-cols-1 product885x:grid-cols-3 gap-9">
                        {data.items.map((item, index) => (
                            <div key={index} className={`flex ${isDarkMode ? "bg-black border border-white" : "bg-white"} shadow-topSide flex-col gap-7 rounded-xl pb-7 cursor-pointer transition-all duration-500 hover:-translate-y-4`}>
                                <div 
                                    style={{
                                        backgroundImage: `url(${item.imageUrl})`,
                                        backgroundSize: "cover",
                                        height: "290px"
                                    }}
                                    className="flex bg-center relative items-end pl-4 pb-4 text-2xl font-semibold text-white rounded-tl-xl rounded-tr-xl"
                                >
                                    <span className="w-32 relative z-10">{item.title}</span>
                                    <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-1"></div>
                                </div>
                                <div className="flex flex-col gap-10 items-center text-center px-4">
                                    <div className="h-14">
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                    <button className={`w-full hover:opacity-80 transition-all duration-300 py-3 ${index % 2 == 1 ? "bg-[#53079D]" : "bg-[#04EED2]"} rounded-xl border-none outline-none text-white font-bold`}>{language == "am" ? "Իմացի՛ր ավելին" : language == "ru" ? "Подробнее" : language == "en" ? "Learn more" : null}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
