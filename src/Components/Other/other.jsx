import { otherAm } from "../../../dataAm";
import { otherRu } from "../../../dataRu";
import { otherEn } from "../../../dataEn";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function Other() {
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    const data = language == "am" ? otherAm : language == "ru" ? otherRu : language == "en" ? otherEn : null;

    return (
        <div className={`grid ${isDarkMode ? "bg-black" : "bg-white"} pt-48 grid-cols-1 md:grid-cols-2`}>
            {data.map(item => (
                <div 
                    className="relative h-[450px] bg-cover bg-center p-4 flex justify-center items-end pb-16" 
                    key={item.id} 
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    <div className="flex flex-col gap-5 w-[450px] text-white relative z-10">
                        <h4 className="text-3xl font-bold">{item.title}</h4>
                        <p className="text-base font-[400]">{item.description}</p>
                        <button 
                            className="w-auto md:w-[292px] py-3 text-white text-center transition-all duration-300 cursor-pointer text-sm font-semibold rounded-xl hover:text-black hover:brightness-[130%]" 
                            style={{ backgroundColor: item.buttonBg }}
                        >
                            {language == "am" ? "Իմացի՛ր ավելին" : language == "ru" ? "Подробнее" : language == "en" ? "Learn more" : null}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
