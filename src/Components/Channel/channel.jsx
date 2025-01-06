import { channelsAm } from "../../../dataAm";
import { channelsEn } from "../../../dataEn";
import { channelsRu } from "../../../dataRu";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function Channel({ active }) {
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    const data = language == "am" ? channelsAm : language == "ru" ? channelsRu : language == "en" ? channelsEn : null;

    return (
        <div className={`px-4 ${isDarkMode ? "bg-black py-2" : "bg-white"}`}>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: {  
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3, 
                    },
                }}
            >
                {(active ? data.shantTv.products : data.viju.products).map((item) => (
                    <SwiperSlide key={item.id} style={{ height: '200px' }}>
                        <div
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                            }}
                            className="h-full bg-cover bg-center flex items-end p-4 rounded-[20px] relative"
                        >
                            <div className="absolute inset-0 bg-black opacity-40 rounded-[20px]" />
                            <span className="relative z-10 text-white text-lg font-bold">{item.title}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
