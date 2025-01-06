import { useState } from "react";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function SlicedHeader() {
    const { language, changeLanguage } = useLanguage(); 
    const {isDarkMode} = useDarkMode();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const handleSelectFlag = (selectedFlag) => {
        changeLanguage(selectedFlag); 
        setDropdownOpen(false);
    };

    return (
        <div className={`flex fixed visible top-0 z-50 ${isDarkMode ? "bg-black" : "bg-white"} px-5 border-b border-gray-200 product460x:px-24 w-full items-center justify-between py-3`}>
            <div>
                <img src="/header-logo.svg" alt="Logo" width="150" className="pl-3 cursor-pointer product1260x:pl-0" />
            </div>
            <div className="flex items-center gap-4">
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        srcSet={`Flags/${language}.svg`}
                        alt={`${language} flag`}
                        className="w-8 h-8 cursor-pointer"
                    />
                </div>
            </div>
            <div
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                className={`absolute right-2 product460x:right-[83px] top-11 bg-white rounded-xl w-14 shadow-topSide mt-1 z-10 transition-opacity duration-300 ${dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <div className={`flex flex-col ${isDarkMode ? "bg-black border border-white" : "bg-white"} rounded-xl items-center p-2 gap-1`}>
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
    );
}
