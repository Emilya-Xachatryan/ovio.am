 import { useEffect, useState } from "react";
import { FaBars, FaBookmark, FaCartPlus, FaTimes, FaUser } from "react-icons/fa";
import TopSide from "../TopSide/topside";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";
import { forHomeListsAm, specialOffersListsAm } from "../../../dataAm";
import { forHomeListsEn, specialOffersListsEn } from "../../../dataEn";
import { forHomeListsRu, specialOffersListsRu } from "../../../dataRu";

export default function Navbar(){
    const [hamburger, setHamburger] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [linkDropDown, setLinkDropDown] = useState(null);

    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    const data = language == "am" ? forHomeListsAm : language == "ru" ? forHomeListsRu : language == "en" ? forHomeListsEn : null;
    const dataSpecial = language == "am" ? specialOffersListsAm : language == "ru" ? specialOffersListsRu : language == "en" ? specialOffersListsEn : null;

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { 
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleHamburger = () => {
        setHamburger(prev => !prev)
    }
    
    const handleMouseMove = (linkName) => {
        setLinkDropDown(linkName)
    }

    const handleMouseLeave = () => {
        setLinkDropDown(null);
    }

    return (
        <div className={`flex ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} fixed top-0 ${isFixed ? "product660x:top-0" : "product660x:top-auto" } z-50 w-full product1260x:p-5 product1360x:px-10 product1455x:px-20 items-center justify-between py-3`}>
            <div>
                <Link to="/">
                    <img src="/header-logo.svg" alt="" width="200" className="pl-3 product1260x:pl-0" />
                </Link>
            </div>
            <div className={`${hamburger ? "block h-screen fixed z-50 pb-5  top-[70px]" : "hidden"} ${isDarkMode ? "bg-black" : "bg-white"} product1260x:flex items-center justify-center gap-5 w-full px-2`}>
                <nav>
                    <ul className="flex flex-col gap-5 pt-5 w-full product1260x:pt-0 product1260x:gap-0 product1260x:w-auto  product1260x:flex product1260x:flex-row product1310x:gap-1 product1360x:gap-2 text-[15px]">
                        <div>
                            <li onMouseMove={() => handleMouseMove("specialOffers")} onMouseLeave={handleMouseLeave} className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Հատուկ առաջարկներ" : language === "en" ? "Special Offers" : language === "ru" ? "Специальные предложения" : null}</li>
                            {linkDropDown === "specialOffers" && (
                                <div onMouseMove={() => handleMouseMove("specialOffers")} onMouseLeave={handleMouseLeave} className={`absolute flex flex-col gap-5 ${isDarkMode ? "bg-black border border-gray-100 text-white" : "bg-white border-gray-200 text-black"} shadow-topSide border text-[15.4px] rounded-xl p-10 max-w-[550px] transition-opacity duration-300 ${linkDropDown === "specialOffers" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <ul className="grid grid-cols-2 gap-5">
                                        {dataSpecial.links.map(item => (
                                            <li key={item.id}>
                                                <Link to={item.path} className={`${isDarkMode ? "hover:text-[#04eed2]" : "hover:text-[#53079d]"} transition-all duration-300`}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <hr />
                                    <div className="flex gap-3 w-[90%] cursor-pointer">
                                        <div>
                                            <img src={dataSpecial.img.imgUrl} alt="" className="w-80 h-auto rounded-lg" />
                                        </div>
                                        <div className="flex flex-col justify-evenly">
                                            <span className="font-bold text-sm">{dataSpecial.img.title}</span>
                                            <span className="text-xs">{dataSpecial.img.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <li onMouseMove={() => handleMouseMove("forHome")} onMouseLeave={handleMouseLeave} className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Տան համար" : language === "en" ? "For home" : language === "ru" ? "Для дома" : null}</li>
                            {linkDropDown === "forHome" && (
                                <div onMouseMove={() => handleMouseMove("forHome")} onMouseLeave={handleMouseLeave} className={`absolute ${isDarkMode ? "bg-black border border-gray-100 text-white" : "bg-white border-gray-200 text-black"} shadow-topSide border text-[15.4px] rounded-xl p-10 max-h-[244px] transition-opacity duration-300 ${linkDropDown === "forHome" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                    <ul className="grid grid-cols-2 gap-7">
                                        {data.map(item => (
                                            <li key={item.id}>
                                                <Link to={item.path} className={`${isDarkMode ? "hover:text-[#04eed2]" : "hover:text-[#53079d]"} transition-all duration-300`}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Մեր մասին" : language === "en" ? "About us" : language === "ru" ? "О нас" : null}</li>
                        <Link to="/subscribers">
                            <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Բաժանորդներ" : language === "en" ? "Subscribers" : language === "ru" ? "Подписчики" : null}</li>
                        </Link>
                        <Link to="/help">
                            <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Օգնություն" : language === "en" ? "Help" : language === "ru" ? "Помощь" : null}</li>
                        </Link>
                        <Link to="/basket">
                            <li className="px-2 border-b pb-2 border-solid border-gray-400 product1260x:border-none cursor-pointer hover:text-[#7734b7] font-[700] transition-all duration-300">{language === "am" ? "Զամբյուղ" : language === "en" ? "Basket" : language === "ru" ? "Корзина" : null}</li>
                        </Link>
                    </ul>
                </nav>
                <div className="hidden product1260x:block w-0 h-12 border-[#e2e2e2] border-[0.8px]"></div>
                <div className="block product1260x:hidden">
                    <TopSide />
                </div>
                <div>
                    <Link to="/login" className={`flex items-center justify-center pb-1 product1260x:justify-start product1260x:pb-0 gap-2 transition-all duration-300 bg-[#2596d7] ${isDarkMode ? "product1260x:bg-black" : "product1260x:bg-white"}  rounded-xl shadow-topSide`}>
                        <div className="hidden product1260x:inline-block">
                            <FaUser />
                        </div>
                        <span className={`border-b pb-1 w-full text-center text-base product660x:border-none product660x:w-0 border-gray-300 py-2 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} product640x:mt-0 product1260x:pt-0`}>{language === "am" ? "Մուտք" : language === "en" ? "Login" : language === "ru" ? "Вход" : null}</span>
                    </Link>
                        <div className="block w-full product660x:hidden">
                            <button className="mt-3 bg-[#53079d] text-white hover:brightness-[120%] transition-all duration-300 cursor-pointer text-sm font-[600] w-full h-12 rounded-xl border-none outline-none tracking-wider">{language === "am" ? "Միացի՛ր հիմա" : language === "en" ? "Join Now" : language === "ru" ? "Подключись сейчас" : null}</button>
                        </div>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="hidden product660x:block bg-[#53079d] text-white hover:brightness-[120%] transition-all duration-300 cursor-pointer text-sm font-[600] min-w-60 h-12 rounded-xl border-none outline-none tracking-wider">{language === "am" ? "Միացի՛ր հիմա" : language === "en" ? "Join Now" : language === "ru" ? "Подключись сейчас" : null}</button>
                <button onClick={toggleHamburger} className="block px-3 text-xl product1260x:hidden">
                    {hamburger ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
    )
}