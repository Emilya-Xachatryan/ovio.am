import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTelegram, FaYoutube } from "react-icons/fa";
import { footerLinksAm } from "../../../dataAm";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function SlicedFooter(){
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    return (
        <footer className={`w-full text-white pt-8 ${isDarkMode ? "bg-black" : "bg-[#101828]"}`}>
            <div className="flex flex-col product805x:flex-row justify-around items-center gap-9 pb-14 border-b border-gray-400">
                <div className=" flex justify-center">
                    <img src="/header-logo.svg" width="130" alt="" />
                </div>
            
                <div className="flex flex-col items-center gap-3">
                    {footerLinksAm.contact.map((item, index) => (
                        <div key={index} className="flex gap-2 items-center text-3xl">
                            {item.icon == "<FaPhone />" ? <FaPhone className="text-[#1ca18f]" /> : <FaEnvelope className="text-[#1ca18f]" />}
                            <span>{item.content}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-4">
                    <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                        <FaFacebook />  
                    </a>
                    <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                        <FaYoutube />
                    </a>
                    <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                        <FaInstagram />
                    </a>
                    <a href="" className="w-12 bg-[#27303f] flex justify-center items-center h-12 border-none outline-none rounded-full text-3xl text-center transition-all duration-300 hover:bg-[#04eed2]">
                        <FaTelegram />
                    </a>
                </div>
            </div>
            <div>
                <div className="flex justify-center py-3 items-center text-xs">
                    <p>{language == "am" ? "© 2024. Բոլոր իրավունքները պաշտպանված են:" : language == "ru" ? "© 2024. Все права защищены" : language == "en" ? "© 2024. All rights reserved" : null}</p>
                </div>
            </div>
        </footer>
    )
}