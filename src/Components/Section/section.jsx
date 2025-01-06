import { Pagination, Autoplay } from "swiper/modules";
import { sectionAm } from "../../../dataAm";
import { sectionRu } from "../../../dataRu";
import { sectionEn } from "../../../dataEn";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'; 
import "./section.css";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function Section() {
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    const data = language == "am" ? sectionAm : language == "ru" ? sectionRu : language == "en" ? sectionEn : null;

    return (
        <div className="w-full mt-14">
            <Swiper
                pagination={{ clickable: true }}
                autoplay={{delay: 3000}}
                modules={[Pagination, Autoplay]}
            >
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className={`flex ${isDarkMode ? "bg-black" : "bg-[#53079D]"} h-[710px] product590x:h-[800px] items-center justify-center product1255x:justify-start gap-11`}>
                            <div className="w-[70%] text-center items-center product590x:text-left product590x:items-start product1255x:w-[40%] product1255x:pl-20 product1370x:pl-32    flex flex-col gap-9 justify-center">
                                <span className="text-5xl product590x:text-6xl text-[#04eed2]">{item.title}</span>
                                <p className="font-normal text-white">{item.description}</p>
                                <div className="flex w-full product590x:w-auto flex-col gap-4 product590x:flex-row product590x:gap-10">
                                {Array.isArray(item.buttons) && item.buttons.map((itemB, index) => (
                                    <button 
                                        key={index}
                                        className="bg-[#04eed2] text-white outline-none border-none rounded-xl px-7 font-semibold py-3 transition duration-300 hover:bg-[#081d1b]"
                                        aria-label={itemB.text}
                                    >
                                        {itemB.text}
                                    </button>
                                ))}
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "60%",
                                    height: "140%", 
                                }}
                                className="rounded-custom hidden product1255x:block"
                            >
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
