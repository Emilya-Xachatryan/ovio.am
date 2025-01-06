import { useLocation } from "react-router"
import { vacanciesEn } from "../../../dataEn";
import { useDarkMode } from "../../Context/darkmode";
import { useLanguage } from "../../Context/language";
import { vacanciesAm } from "../../../dataAm";
import { vacanciesRu } from "../../../dataRu";

export default function VacancieItem(){
    const location = useLocation();
    const {isDarkMode} = useDarkMode();
    const {language} = useLanguage();
    const pathName = location.pathname.substring(11);

    const data = language == "am" ? vacanciesAm : language == "ru" ? vacanciesRu : language == "en" ? vacanciesEn : null;
    let filteredData = data.products.filter(item => item.path.toLowerCase() == pathName)

    return (
        <div className={`${isDarkMode ? "bg-black" : "bg-white"} py-32 px-5 flex flex-col items-center`}>
            <div style={{
                backgroundImage: "url(/Vacancies/vacancieMain.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative"
            }} className="h-[350px] w-full product1070x:w-[90%] product1220x:w-[76%] product805x:h-[420px] rounded-xl flex items-end pl-8 pb-8 text-white">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 rounded-[20px]"></div>
                <span className="text-[40px] font-semibold relative">{filteredData[0].title}</span>
            </div>
            <div className="flex gap-11 mt-16 flex-col product700x:flex-row justify-center">
                <div className="w-full product700x:w-[60%]">
                    <div className={`w-full product700x:max-w-[935px] shadow-vacancies rounded-xl ${isDarkMode ? "border border-solid border-gray-500" : "border-none"} flex flex-col gap-6 py-5`}>
                        <div className="grid grid-cols-3 gap-7 px-8 text-xs text-[#858585]">
                            <div className="font-semibold">
                                <span>{language == "am" ? "Աշխատավայր" : language == "ru" ? "Место работы" : language == "en" ? "Workplace" : null}</span>
                            </div>
                            <div className="font-semibold">
                                <span>{language == "am" ? "Աշխատանքային ժամեր" : language == "ru" ? "Рабочие часы" : language == "en" ? "Working hours" : null}</span>
                            </div>
                            <div className="font-semibold">
                                <span>{language == "am" ? "Դիմումների ընդունման վերջնաժամկետ" : language == "ru" ? "Срок подачи заявок" : language == "en" ? "Deadline for Applications" : null}</span>
                            </div>
                            <div className={`${isDarkMode ? "text-white" : "text-black"} text-sm`}>
                                <span className="font-semibold">{filteredData[0].workplace}</span>
                            </div>
                            <div className={`${isDarkMode ? "text-white" : "text-black"} text-sm`}>
                                <span>{filteredData[0].hours}</span>
                            </div>
                            <div className={`${isDarkMode ? "text-white" : "text-black"} text-sm`}>
                                <span>{filteredData[0].deadline}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={`${isDarkMode ? "text-gray-400" : "text-[#101828]"} mt-8 ml-2`}>{filteredData[0].available}</p>
                    </div>
                </div>
                <div className={`shadow-vacancies ${isDarkMode ? "border border-solid border-gray-500" : "border-none"} p-4 h-[100px] rounded-xl flex justify-center items-center`}>
                    <button className={`${isDarkMode ? "bg-[#04eed2] text-black" : "bg-[#53079d] text-white"} w-full hover:brightness-[140%] transition-all duration-300 product700x:w-auto font-semibold px-24 rounded-xl py-[10px]`}>{filteredData[0].availableBtn}</button>
                </div>
            </div>
        </div>
    )
}