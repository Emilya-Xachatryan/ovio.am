import { useState } from "react";
import { channelsAm } from "../../dataAm";
import { channelsEn } from "../../dataEn";
import { channelsRu } from "../../dataRu";
import Channel from "../Components/Channel/channel"
import { useLanguage } from "../Context/language";
import { useDarkMode } from "../Context/darkmode";

export default function ChannelLayout() {
    const [active, setActive] = useState(false);
    const {isDarkMode} = useDarkMode();

    const {language} = useLanguage();
    const data = language == "am" ? channelsAm : language == "ru" ? channelsRu : language == "en" ? channelsEn : null;

    return (
        <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} flex flex-col pt-20 gap-4 items-center`}>
            <div className="w-[90%] flex flex-col gap-8">
                <h1 className="text-3xl font-medium">{data.title}</h1>
                <div>
                    <ul className={`flex ${isDarkMode ? "bg-black text-white border border-[#f4f4f4]" : "bg-[#f4f4f4] text-black"} items-center rounded-xl px-4 gap-3`}>
                        <li className={`px-10 cursor-pointer py-3 font-semibold ${active ? "border-none" : "border-b-[3px] border-[#53079d] text-[#53079d]"}`} onClick={() => setActive(false)}>{data.viju.channelTitle}</li>
                        <li className={`px-5 cursor-pointer py-3 font-semibold ${active ? "border-b-[3px] border-[#53079d] text-[#53079d]" : "border-none"}`} onClick={() => setActive(true)}>{data.shantTv.title}</li>
                    </ul>
                </div>
                <Channel active={active} />
                <div className="flex flex-col product590x:flex-row gap-6">
                    <button className="min-w-60 bg-[#53079d] text-white rounded-xl font-semibold transition-all duration-300 px-4 py-2 hover:brightness-[130%]">{language == "am" ? "Փաթեթներ" : language == "ru" ? "Пакеты" : language == "en" ? "Packages" : null}</button>
                    <button className="min-w-60 bg-[#04eed2] text-white rounded-xl font-semibold transition-all duration-300 px-4 py-2 hover:brightness-[130%]">{language == "am" ? "Բոլոր ալիքները" : language == "ru" ? "Все телеканалы" : language == "en" ? "All Channels" : null}</button>
                </div>
            </div>
        </div>
    )
};
