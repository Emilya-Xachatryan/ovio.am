import { FaHeart, FaTrash } from "react-icons/fa";
import useBookmarkStore from "../../Store/useBookmarkStore"
import { FaDeleteLeft, FaXmark } from "react-icons/fa6";
import { useLanguage } from "../../Context/language";
import "./basket.css"
import { useDarkMode } from "../../Context/darkmode";

export default function Basket() {
    const { bookmarkNews, bookmarkSuggestions, bookmarkOvio, removeBookmark } = useBookmarkStore();
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    return (
        <div className={`p-5 pt-24 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <h1 className="text-2xl font-bold mb-4 text-center">My Bookmarks</h1>

            <div>
                <h2 className="text-2xl font-semibold pb-7">Why Ovio</h2>
                <div className="flex overflow-x-auto gap-4">
                {bookmarkOvio.length > 0 ? (
                        bookmarkOvio.map(item => {
                            return (
                                <div key={item.number} className={`flex mb-5 gap-5 h-[152px] ${isDarkMode ? "border border-white" : "border-none"} min-w-[500px] shadow-lg rounded-[12px] relative overflow-hidden`}>
                                    <div className={`bg-[${item.bgColor}] flex justify-center items-center rounded-[21px_120px_120px_21px] py-2 px-10 text-[44px] font-bold text-white`}>
                                        <span>{item.number}</span>
                                    </div>
                                    <FaXmark
                                        className={`absolute right-5 top-5 cursor-pointer text-2xl transition-all duration-200 text-red-600 hover:scale-125 hover:text-black`}
                                        onClick={() => removeBookmark(item, "ovio")}
                                    />
                                    <div className="flex flex-col justify-evenly">
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p className="text-xs text-[#858585] leading-4">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <span>No bookmarks available.</span>
                    )}
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mt-10">Suggestions</h2>
                <div className="flex overflow-x-auto gap-4">
                {bookmarkSuggestions.length > 0 ? (
                        bookmarkSuggestions.map(item => {
                            return (
                                <div key={item.id} className={`${'col-span-1 row-start-1'} transition-all min-w-[300px] duration-500`}>
                                    <div
                                        className="relative my-10 flex justify-center bg-cover bg-center items-end h-[432px] py-8 px-7 text-white rounded-[20px] hover:-translate-y-5 transition-all duration-500 cursor-pointer w-full product640x:max-w-[348px] product970x:max-w-[448px]"
                                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                                    >
                                        <div className="absolute inset-0 bg-black opacity-40 rounded-[20px]" />
                                        <FaTrash
                                            className={`absolute left-4 top-4 cursor-pointer text-xl transition-all duration-200 text-red-600 hover:scale-150`}
                                            onClick={() => removeBookmark(item, "suggestions")}
                                        />
                                        <div className="px-2 product1260x:px-0 relative flex flex-col gap-5 z-10">
                                            <p className="text-xl product1260x:text-2xl font-bold">{item.title}</p>
                                            <p className="text-base">{item.description}</p>
                                            <button 
                                                className={`w-auto product1260x:w-[292px] py-3 text-white text-center transition-all duration-300 ${item.id === 1 ? "bg-[#E5326F]" : "bg-[#53079D]"} cursor-pointer text-sm font-semibold rounded-xl hover:brightness-[140%]`}
                                            >
                                               {language == "am" ? "Իմացի՛ր ավելին" : language == "ru" ? "Подробнее" : language == "en" ? "Learn more" : null}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <span>No bookmarks available.</span>
                    )}
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-semibold ml-6 mt-10">News</h2>
                <div className="flex overflow-x-auto gap-4">
                {bookmarkNews.length > 0 ? (
                        bookmarkNews.map(item => {
                            return (
                                <div key={item.id}>
                                    <div className={`flex ${isDarkMode ? "border border-white" : "border-none"} my-10 mx-0 product560x:mx-5 flex-col w-[300px] product460x:w-[364px] h-[380px] cursor-pointer hover:-translate-y-4 transition-all duration-300 shadow-topSide rounded-[20px]`}>
                                        <div
                                            style={{ backgroundImage: `url(${item.imageUrl})` }}
                                            className="bg-cover flex flex-col items-end overflow-visible rounded-t-[20px] bg-center relative h-[50%] z-0"
                                        >
                                            <span className={`${item.id % 2 === 0 ? "bg-[#53079d]" : "bg-[#04eed2]"} text-white px-3 py-1 rounded-tl-xl rounded-br-xl relative right-6 -top-4 text-sm`}>
                                                {item.top}
                                            </span>
                                            <FaTrash
                                                className={`absolute left-4 top-3 cursor-pointer text-xl transition-all duration-200 text-red-600 hover:scale-125`}
                                                onClick={() => removeBookmark(item, "news")}
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
                                </div>
                            );
                        })
                    ) : (
                        <span>No bookmarks available.</span>
                    )}
                </div>
            </div>
        </div>
    )
};
