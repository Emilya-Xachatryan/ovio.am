import { useState } from "react";
import { happyWeekendAm } from "../../../dataAm";
import { useDarkMode } from "../../Context/darkmode";
import { FaArrowUp } from "react-icons/fa";
import { useLanguage } from "../../Context/language";
import { happyWeekendRu } from "../../../dataRu";
import { happyWeekendEn } from "../../../dataEn";

export default function HappyWeekend() {
    const [show, setShow] = useState(false);

    const {isDarkMode} = useDarkMode();
    const {language} = useLanguage();

    const data = language == "am" ? happyWeekendAm : language == "ru" ? happyWeekendRu : language == "en" ? happyWeekendEn : null;

    const toggleShow = () => {
        setShow(!show)
    }
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
            <div className={`flex flex-col ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} items-center justify-center py-16 gap-16`}>
                <div className="w-[75%] flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl font-semibold">{data.items.title}</h1>
                        <p className="text-sm leading-6 product560x:text-lg product560x:leading-8">{data.items.desc}</p>
                    </div>
                    <div className="flex justify-between gap-14 flex-col items-center product970x:gap-5 product970x:flex-row">
                        {data.items.items.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center product970x:text-left product970x:items-start gap-2 w-[350px]">
                                <div className={`w-20 h-20 flex justify-center items-center ${index % 2 == 1 ? "bg-[#04eed2]" : "bg-[#53079d]"} rounded-full`}>
                                    <img src={item.iconUrl} alt={item.iconUrl} className="w-[60%] h-[60%]"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-semibold text-[20px]">{item.title}</span>
                                    <span className="text-xs text-[#858585] tracking-wide fopnt-[500]">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <button className="bg-[#04eed2] w-auto px-20 py-3 rounded-xl hover:brightness-[140%] hover:text-black transition-all duration-500 font-semibold text-white text-sm">{language == "am" ? "Վճարել Հիմա" : language == "ru" ? "Оплатить сейчас" : language == "en" ? "Pay now" : null}</button>
                    </div>
                </div>
                <div className="w-[75%]">
                    <div className={`${isDarkMode ? "bg-black text-white" : "text-black bg-[#fefefe]"} py-6 px-10 border flex flex-col gap-6 border-solid border-[#e3e8ec] rounded-xl`}>
                        <h1 className="text-[28px] font-semibold">{data.items.conditions.title}</h1>
                        <span className="text-base">{data.items.conditions.desc}</span>
                        <div>
                            <span className={`text-[#04eed2] font-semibold w-32 cursor-pointer text-sm ${show ? "hidden" : "block"}`} onClick={toggleShow}>{language == "am" ? "Կարդալ ավելին" : language == "ru" ? "Читать дальше" : language == "en" ? "Read more" : null}</span>
                        </div>
                        {show && 
                            <div className="border-t border-[#e3e8ec] border-solid flex flex-col gap-5 pt-10">
                                <p className="text-[15px]">{data.items.conditions.available}</p>
                                <div className="flex justify-center">
                                    <button className={`text-sm font-semibold text-[#53079d] ${show ? "flex items-center gap-3 border-none outline-none" : "hidden"}`} onClick={toggleShow}>{language == "am" ? "Փակել" : language == "ru" ? "Закрыть" : language == "en" ? "Close" : null} <FaArrowUp /></button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}