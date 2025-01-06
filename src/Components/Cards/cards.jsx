import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { cardsAm } from "../../../dataAm";
import { cardsEn } from "../../../dataEn";
import { cardsRu } from "../../../dataRu";
import { Navigation } from "swiper/modules";
import { useLanguage } from "../../Context/language";
import useBookmarkStore from "../../Store/useBookmarkStore";
import { FaHeart } from "react-icons/fa";
import { useDarkMode } from "../../Context/darkmode";

export default function Cards() {
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();
    const { addBookmark, bookmarkOvio } = useBookmarkStore();

    const data = language == "am" ? cardsAm : language == "ru" ? cardsRu : language == "en" ? cardsEn : null;

    return (
        <div className={`px-3 pt-16 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} product340x:px-7 product660x:px-28`}>
            <div>
                <h1 className="text-3xl font-bold">{data.title}</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation
                pagination={{ clickable: false }}
                modules={[Navigation]}
                breakpoints={{
                    800: { 
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1020: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                    },
                    1420: { 
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                className="cursor-grab py-10 rounded-r-[21px]"
            >
                {data.products.map((item) => {
                    const isBookmarked = bookmarkOvio.some(bookmark => bookmark.number == item.number);
                    return (
                        <SwiperSlide key={item.number} className={`w-[453px] ${isDarkMode ? "bg-black text-white border border-white rounded-[21px_120px_120px_21px]" : "bg-white text-black"} my-10 rounded-[20px]`}>
                            <div className="flex gap-5 h-[152px] shadow-lg rounded-[12px] overflow-hidden">
                                <div
                                    className={`bg-[${item.bgColor}] flex justify-center items-center rounded-[21px_120px_120px_21px] py-2 px-10 text-[44px] font-bold text-white`}
                                >
                                    <span>{item.number}</span>
                                </div>
                                <FaHeart
                                    className={`absolute left-3 top-2 cursor-pointer text-xl transition-all duration-200 ${isBookmarked ? "text-red-500" : "text-white hover:scale-125"}`}
                                    onClick={() => addBookmark(item, "ovio")}
                                />
                                <div className="flex flex-col justify-evenly">
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p className="text-xs text-[#858585] leading-4">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })} 
            </Swiper>
        </div>
    );
}
