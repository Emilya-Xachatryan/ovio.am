import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../Context/darkmode";

export default function DarkMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={`fixed bottom-7 left-7 z-50 flex items-center justify-center p-2 rounded-full transition-all duration-300 
            ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#450087] text-white'} cursor-pointer`}
            onClick={toggleDarkMode}
        >
            <span className={`text-3xl transition-transform duration-300 
                ${isDarkMode ? 'transform rotate-180' : ''}`}
            >
                {isDarkMode ? <FaMoon /> : <FaSun />}
            </span>
        </div>
    );
}
