import { phoneServiceAm } from "../../../dataAm"
import { phoneServiceEn } from "../../../dataEn";
import { phoneServiceRu } from "../../../dataRu";
import { useDarkMode } from "../../Context/darkmode"
import { useLanguage } from "../../Context/language";

export default function PhoneService() {
    const {isDarkMode} = useDarkMode();
    const {language} = useLanguage();

    const data = language == "am" ? phoneServiceAm : language == "ru" ? phoneServiceRu : language == "en" ? phoneServiceEn : null

    return (
        <div>
            <div>
                <div className={`flex ${isDarkMode ? "bg-black" : "bg-[#53079D]"} h-[710px] product590x:h-[800px] items-center justify-center overflow-hidden product1255x:justify-start gap-11`}>
                    <div className="w-[70%] text-center items-center product590x:text-left product590x:items-start product1255x:w-[40%] product1255x:pl-20 product1370x:pl-32    flex flex-col gap-9 justify-center">
                        <span className="text-5xl product590x:text-6xl text-[#04eed2]">{data.section.sectionTitle}</span>
                        <p className="font-normal text-white">{data.section.sectionDesc}</p>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${data.section.sectionImg})`,
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
            <div className={`flex flex-col items-center px-10 product1420x:items-start product1420x:flex-row py-16 product1420x:justify-center product1420x:px-6 ${isDarkMode ? "bg-black text-white" : "bg-white"}`}>
                <div className="flex flex-col gap-10 product1000x:w-[900px]">
                    <span className="text-4xl font-medium">{data.desc.descTop}</span>
                    <div className="flex flex-col gap-10">
                        {data.items.map(item => (
                            <div className="flex gap-5 flex-col items-start product1000x:items-center px-4 product1000x:flex-row " key={item.id}>
                                <div className={`w-20 aspect-w-1 aspect-h-1 h-20 rounded-full ${isDarkMode ? "bg-black border border-[#04eed2] text-[#04eed2]" : "bg-[#53079d] text-white"} outline-none flex justify-center items-center text-[42px]`}>
                                    {item.id}
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl font-semibold break-words">{item.title}</p>
                                    <p className="text-[13px]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-9 pt-10">
                        <span className="text-4xl font-medium">{data.desc.descBottom}</span>
                        <span className="text-base font-thin">{data.desc.descwithBottom}</span>
                    </div>
                </div>
                <div className="flex flex-col product880x:flex-row mt-20 product1420x:mt-0 product1420x:flex-col gap-4">
                    <div className={`flex flex-col ${isDarkMode ? "border-2 border-[#53079d]" : "border-none"} px-7 text-center w-auto product460x:w-[400px] items-center justify-evenly rounded-[20px] shadow-phoneService text-sm h-[150px]`}>
                        <span className="text-lg font-semibold">{data.contact.first}</span>
                        <button className="bg-[#53079d] font-bold text-white w-[85%] py-3 hover:brightness-[140%] transition-all duration-300 rounded-xl">060 46 46 46</button>
                    </div>
                    <div className={`flex flex-col ${isDarkMode ? "border-2 border-[#04eed2]" : "border-none"} items-center justify-evenly rounded-[20px] shadow-phoneService text-sm w-auto product460x:w-[400px] h-[150px]`}>
                        <span className="text-lg font-semibold">{data.contact.second}</span>
                        <button className="bg-[#04eed2] font-bold text-white w-[85%] py-3 hover:text-black transition-all duration-300 rounded-xl">060 46 46 46</button>
                    </div>
                </div>
            </div>
        </div>
    )
}