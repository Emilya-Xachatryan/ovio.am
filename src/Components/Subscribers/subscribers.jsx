import { useEffect, useState } from "react";
import { subscribersAm } from "../../../dataAm";
import { subscribersEn } from "../../../dataEn";
import { subscribersRu } from "../../../dataRu";
import { useDarkMode } from "../../Context/darkmode";
import { useLanguage } from "../../Context/language";

export default function Subscribers() {
    const { language } = useLanguage();
    const { isDarkMode } = useDarkMode();

    const [inputVal, setInputVal] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleInput = (e) => {
        setInputVal(e.target.value);
    };

    const data = language === "am" ? subscribersAm : language === "ru" ? subscribersRu : subscribersEn;

    useEffect(() => {
            const searched = data.filter(item =>
            item.name.toLowerCase().includes(inputVal.toLowerCase()) || item.surname.toLowerCase().includes(inputVal.toLowerCase()) || item.email.toLowerCase().includes(inputVal.toLowerCase())
        );
        setFilteredData(searched);
    }, [inputVal, data]);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    return (
        <div className={`flex pt-32 flex-col items-center gap-5 p-6 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} transition duration-300`}>
            <div className="mb-4 w-full">
                <input
                    type="text"
                    onChange={handleInput}
                    placeholder={language === "am" ? "Որոնել բաժանորդներ..." : language === "ru" ? "Поиск пользователей..." : "Search subscribers..."}
                    className={`w-full p-3 rounded-lg border-2 ${isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-gray-200 border-gray-400 text-black"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
            </div>
            <div className="w-full overflow-x-auto">
            <table className={`min-w-full border-collapse rounded-lg overflow-hidden ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
                <thead>
                    <tr className={`bg-gray-200 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                        <th className={`border py-3 px-5 text-left ${isDarkMode ? "border-gray-600 text-white" : "border-gray-300 text-gray-800"}`}>{language === "am" ? "Անուն" : language === "ru" ? "Имя" : "Name"}</th>
                        <th className={`border py-3 px-5 text-left ${isDarkMode ? "border-gray-600 text-white" : "border-gray-300 text-gray-800"}`}>{language === "am" ? "Ազգանուն" : language === "ru" ? "Фамилия" : "Surname"}</th>
                        <th className={`border py-3 px-5 text-left ${isDarkMode ? "border-gray-600 text-white" : "border-gray-300 text-gray-800"}`}>{language === "am" ? "Էլ․ փոստ" : language === "ru" ? "Электронная почта" : "Email"}</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index} className={`hover:bg-gray-100 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition duration-200`}>
                            <td className={`border py-2 px-5 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>{item.name}</td>
                            <td className={`border py-2 px-5 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>{item.surname}</td>
                            <td className={`border py-2 px-5 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>{item.email}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
}
