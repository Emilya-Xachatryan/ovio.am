import { useNavigate } from "react-router";
import { vacanciesAm } from "../../../dataAm";
import { vacanciesEn } from "../../../dataEn";
import { vacanciesRu } from "../../../dataRu";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function Vacancies(){
    const {language} = useLanguage();
    let navigate = useNavigate();
    const {isDarkMode} = useDarkMode();

    const data = language == "am" ? vacanciesAm : language == "ru" ? vacanciesRu : language == "en" ? vacanciesEn : null

    const handleSubmit = (item) => {
        navigate(`/vacancies/${item.toLowerCase()}`)
    }

    return (
        <div className={`py-24 ${isDarkMode ? "bg-black text-white" : "bg-white"} px-5 product640x:px-12 product880x:px-20 product1220x:px-36`}>
            <div>
                <h1 className="text-[32px] font-semibold">{data.main.title}</h1>
                <p className="leading-8 max-w-[1200px] mt-4">{data.main.desc}</p>
            </div>
            <div className="grid grid-cols-1 product880x:grid-cols-2 product1220x:grid-cols-3 gap-5 mt-14">
                {data.products.map((item) => (
                    <div key={item.id} className={`min-h-[440px] ${isDarkMode ? "border border-gray-600 border-solid" : "border-none"} cursor-pointer shadow-vacancies rounded-[20px]`}>
                        <div style={{
                            backgroundImage: "url(/Vacancies/vacancieMain.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative"
                        }} className="h-[60%] rounded-[20px] flex items-end pb-8 px-8 text-white font-semibold">
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 rounded-[20px]"></div>
                            <span className="text-2xl relative">{item.title}</span>
                        </div>
                        <div className="h-[40%] px-8 flex flex-col justify-evenly">
                            <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-[#101828]"}`}>{item.desc}</p>
                            <button onClick={() => handleSubmit(item.path)} className="bg-[#53079d] hover:brightness-[140%] transition-all duration-300 w-full py-3 text-white rounded-xl font-semibold">{item.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}