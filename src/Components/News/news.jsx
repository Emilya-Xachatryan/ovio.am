import { Swiper, SwiperSlide } from "swiper/react";
import { newsAm } from "../../../dataAm";
import { newsRu } from "../../../dataRu";
import { Navigation, Pagination } from "swiper/modules";
import { newsEn } from "../../../dataEn";
import { useLanguage } from "../../Context/language";
import useBookmarkStore from "../../Store/useBookmarkStore";
import { FaHeart } from "react-icons/fa";
import { useDarkMode } from "../../Context/darkmode";

export default function News() {
    const { language } = useLanguage();
    const {isDarkMode} = useDarkMode();
    const { addBookmark, bookmarkNews } = useBookmarkStore();

    const data = language === "am" ? newsAm : language === "ru" ? newsRu : language === "en" ? newsEn : null;

    return (
        <div className={`pl-10 pb-10 pt-24 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} product560x:pl-20 product1190x:pl-360`}>
            <span className="text-3xl font-bold mx-5">{data.title}</span>
            <Swiper
                slidesPerView={4}
                spaceBetween={150}
                breakpoints={{
                    1568: { slidesPerView: 4, spaceBetween: 150 },
                    1030: { slidesPerView: 3, spaceBetween: 20 },
                    859: { slidesPerView: 2, spaceBetween: 20 },
                    725: { slidesPerView: 1, spaceBetween: 10 },
                    616: { slidesPerView: 1, spaceBetween: 20 },
                    400: { slidesPerView: 1, spaceBetween: 10 },
                }}
                navigation
                modules={[Navigation, Pagination]}
                className="cursor-grab"
                style={{ display: "flex", justifyContent: "center" }}
            >
                {data.products.map((item) => {
                    const isBookmarked = bookmarkNews.some(bookmark => bookmark.id === item.id);

                    return (
                        <SwiperSlide key={item.id}>
                            <div className={`flex my-10 mx-5 flex-col w-[85%] product1310x:w-[364px] h-[380px] cursor-pointer hover:-translate-y-4 transition-all duration-300 ${isDarkMode ? "border border-white" : "bg-white"} shadow-topSide rounded-[20px]`}>
                                <div
                                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                                    className="bg-cover flex flex-col items-end overflow-visible rounded-t-[20px] bg-center relative h-[50%] z-0"
                                >
                                    <span className={`${item.id % 2 === 0 ? "bg-[#53079d]" : "bg-[#04eed2]"} text-white px-3 py-1 rounded-tl-xl rounded-br-xl relative right-6 -top-4 text-sm`}>
                                        {item.top}
                                    </span>
                                    <FaHeart
                                        className={`absolute left-4 top-3 cursor-pointer text-xl transition-all duration-200 ${isBookmarked ? "text-red-500" : "text-white hover:scale-125"}`}
                                        onClick={() => addBookmark(item, "news")}
                                    />
                                </div>
                                <div className="h-[50%] px-4 flex flex-col justify-evenly">
                                    <div>
                                        <span className="text-base font-semibold">
                                            {item.title.length > 45 ? `${item.title.substring(0, 45)}...` : item.title}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-sm font-[500]">{item.date}</span>
                                        <p className="text-xs">{item.description.length >= 245 ? `${item.description.slice(0, 145)}...` : item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="product885x:w-full">
                <button className="bg-[#04eed2] w-[90%] product885x:w-auto font-semibold text-black border-none px-7 py-3 rounded-xl hover:text-white outline-none">
                    {language === "am" ? "Բոլոր նորությունները" : language === "ru" ? "Все новости" : language === "en" ? "All News" : null}
                </button>
            </div>
        </div>
    );
}
