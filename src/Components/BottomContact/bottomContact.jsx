import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaMessage, FaXmark } from "react-icons/fa6";
import { bottomContactAm } from "../../../dataAm";
import { bottomContactEn } from "../../../dataEn";
import { bottomContactRu } from "../../../dataRu";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function BottomContact(){
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    const data = language == "am" ? bottomContactAm : language == "ru" ? bottomContactRu : language == "en" ? bottomContactEn : null;

    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenModal(true)
        }, 3000);

        return () => clearTimeout(timer)
    }, []) 

    const toggleModal = () => {
        setOpenModal(prev => !prev)
    }

    return (
        <>
            {openModal && (
                <div className={`modal h-[480px] z-50 rounded-md ${isDarkMode ? "bg-black" : "bg-white"} pb-3 w-auto ml-4 product420x:ml-0 product420x:w-[350px] fixed right-5 bottom-24 shadow-bottomContact`}>
                    <div className={`flex flex-col rounded-md ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} justify-between h-full items-center`}>
                        <div className="text-center pt-5 rounded-md bg-[#450087] w-full px-4 text-white h-[150px] relative">
                            <h4>{data.title}</h4>
                        </div>
                        <div className={`w-5/6 h-[338px] rounded-md absolute text-[13px] top-[106px] px-4 pb-[15px] ${isDarkMode ? "bg-black text-black" : "bg-white"}`}>
                            <div className="flex flex-col gap-5 pt-3">
                                <input type="text" placeholder={data.inp1} className={`h-10 ${isDarkMode ? "bg-transparent text-white" : "bg-white text-black"} pl-2 border border-solid border-[#d9dbe4] rounded-md outline-none`} />
                                <input type="text" placeholder={data.inp2} className={`h-10 ${isDarkMode ? "bg-transparent text-white" : "bg-white text-black"} pl-2 border border-solid border-[#d9dbe4] rounded-md outline-none`} />
                                <input type="text" placeholder={data.inp3} className={`h-10 ${isDarkMode ? "bg-transparent text-white" : "bg-white text-black"} pl-2 border border-solid border-[#d9dbe4] rounded-md outline-none`} />
                                <input type="text" placeholder={data.inp4} className={`h-20 ${isDarkMode ? "bg-transparent text-white" : "bg-white text-black"} border pl-2 border-solid border-[#d9dbe4] rounded-md outline-none`} />
                                <button className="bg-[#450087] w-full text-base rounded-md h-10 gap-2 text-white flex justify-center items-center text-center">
                                    <FaEnvelope /> {data.button}
                                </button>
                            </div>
                        </div>
                        <span className="text-xs py-2">Powered by OVIO</span>
                    </div>
                </div>
            )}
            <div onClick={toggleModal} className={`${isDarkMode ? "bg-gray-900" : "bg-[#450087]"} cursor-pointer fixed z-50 flex justify-center items-center w-[60px] h-[60px] bottom-7 rounded-full right-7`}>
                {openModal ? <FaXmark className="w-8 h-8 text-white" /> : <FaMessage className="w-8 h-8 text-white" /> }
            </div>
        </>   
    )
}