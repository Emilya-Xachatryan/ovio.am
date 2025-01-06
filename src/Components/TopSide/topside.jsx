import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function TopSide() {
    const { language, changeLanguage } = useLanguage(); 
    const {isDarkMode} = useDarkMode();

    const [advancedDropdown, setAdvancedDropdown] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSelectFlag = (selectedFlag) => {
        changeLanguage(selectedFlag);
        setDropdownOpen(false);
        localStorage.setItem("lang", selectedFlag);
    };

    const handleMouseEnter = () => {    
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const mouseAdvanced = () => {
        setAdvancedDropdown(true);
        setDropdownOpen(false);
    };

    const mouseAdvancedLeave = () => {
        setAdvancedDropdown(false);
    };

    return (
        <div className={`flex my-5 ${isDarkMode ? "text-white bg-black" : "text-black"} items-center justify-between product640x:my-0 product640x:flex-row h-[52px] px-2 product640x:border-b-[0.1px] border-[#e2e2e2] product640x:items-center product640x:justify-between product1260x:px-16`}>
            <div className="flex gap-3 items-start flex-col product640x:flex-row product640x:gap-7 product640x:items-center">
                <div>
                    <Link to="tel:+374604646" className="flex gap-2 items-center hover:text-[#6e35a3]">
                        <FaPhone className="text-[#858585]" />
                        <span className="text-xs">+374 60 46 46 46</span>
                    </Link>
                </div>
                <div>
                    <Link to="mailto:info@ovio.am" className="flex gap-2 items-center hover:text-[#6e35a3]">
                        <FaEnvelope className="text-[#858585]" />
                        <span className="text-xs">info@ovio.am</span>
                    </Link>
                </div>
                <div>
                    <Link to="#" className="flex gap-2 items-center hover:text-[#6e35a3]">
                        <FaLocationDot className="text-[#858585]" />
                        <span className="text-xs">
                            {language === "am" ? "Գրասենյակներ և ծածկույթ" : 
                             language === "en" ? "Offices and Coverage" : 
                             language === "ru" ? "Офисы и Покрытие" : null}
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <div className="relative ml-auto flex gap-4 items-center">
                    <div className="flex items-center gap-4">
                        <div className="cursor-pointer" onMouseEnter={mouseAdvanced} onMouseLeave={mouseAdvancedLeave}>
                            <span className="cursor-pointer text-xs">
                                {language === "am" ? "Լրացուցիչ" : 
                                 language === "en" ? "Additional" : 
                                 language === "ru" ? "Дополнительно" : null}
                            </span>
                        </div>
                        {advancedDropdown && (
                            <div onMouseEnter={mouseAdvanced} onMouseLeave={mouseAdvancedLeave} className={`absolute z-50 right-10 top-6 bg-white rounded-xl shadow-topSide mt-1 transition-opacity duration-300`}>
                                <ul className={`flex flex-col gap-4 text-sm w-64 p-4 ${isDarkMode ? "text-white bg-black rounded-xl" : "text-black"}`}>
                                    <li><Link to="/help">{language === "am" ? "Օգնություն" : language === "en" ? "Help" : language === "ru" ? "Помощь" : null}</Link></li>
                                    <li><Link to="/phoneService">{language === "am" ? "Հեռախոսային սպասարկում" : language === "en" ? "Telephone Service" : language === "ru" ? "Обслуживание по телефону" : null}</Link></li>
                                    <li><Link to="/vacancies">{language === "am" ? "Աշխատատեղեր" : language === "en" ? "Vacancies" : language === "ru" ? "Вакансии" : null}</Link></li>
                                </ul>
                            </div>
                        )}
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img
                                srcSet={`Flags/${language}.svg`}
                                alt={`${language} flag`}
                                className="w-8 h-8 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`absolute z-50 -right-3 top-7 bg-white rounded-xl w-14 shadow-topSide mt-1 transition-opacity duration-300 ${dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                        <div className={`flex flex-col items-center p-2 gap-1 ${isDarkMode ? "text-white bg-black rounded-xl" : "text-black"}`}>
                            <img
                                srcSet="Flags/am.svg"
                                alt="Armenia flag"
                                className="w-8 h-8 cursor-pointer"
                                onClick={() => handleSelectFlag("am")}
                            />
                            <img
                                srcSet="Flags/ru.svg"
                                alt="Russia flag"
                                className="w-8 h-8 cursor-pointer"
                                onClick={() => handleSelectFlag("ru")}
                            />
                            <img
                                srcSet="Flags/en.svg"
                                alt="United States flag"
                                className="w-8 h-8 cursor-pointer"
                                onClick={() => handleSelectFlag("en")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
