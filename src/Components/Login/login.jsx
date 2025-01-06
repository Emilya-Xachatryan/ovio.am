import { useCallback, useEffect, useRef, useState } from "react";
import { conditionsAm } from "../../../dataAm";
import { conditionsRu } from "../../../dataRu";
import { conditionsEn } from "../../../dataEn";
import { FaEye, FaEyeSlash, FaIdCard, FaLock } from "react-icons/fa";
import { users } from "../../../userInfo";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../Context/language";
import { useDarkMode } from "../../Context/darkmode";

export default function Login( {loggedIn, setLoggedIn} ) {
    const {language} = useLanguage();
    const {isDarkMode} = useDarkMode();

    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [show, setShow] = useState(false);

    const data = language == "am" ? conditionsAm : language == "ru" ? conditionsRu : conditionsEn

    const userPassportId = useRef();
    const userPassword = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            navigate("/"); 
        }
    }, [loggedIn, navigate]);

    const showHide = () => {
        setShow(!show)
    }

    const handleLogin = useCallback((e) => {
        e.preventDefault();

        const infoPassport = userPassportId.current.value;
        const infoPassword = userPassword.current.value;

        setError(false);
        setError2(false);

        if (infoPassport === "" || infoPassword === "") {
            setError(true);
            setLoggedIn(false);
            return;
        }

        const user = users.find(item => item.passportId === infoPassport && item.password === infoPassword);
        const userStorage = JSON.parse(localStorage.getItem("info"));
        const user2 = userStorage && userStorage.find(item2 => item2.passportId === infoPassport && item2.passwordUser === infoPassword);

        if (user || user2) {
            userPassportId.current.value = "";
            userPassword.current.value = "";
            setLoggedIn(true);
            navigate("/")
        } else {
            setError2(true);
            setLoggedIn(false)
            userPassportId.current.value = "";
            userPassword.current.value = "";
        }
    }, [navigate]);

    return (
        <div className={`py-9 mt-14 ${isDarkMode ? "bg-black" : "bg-white"} h-[72vh] flex justify-center items-center text-[#101828]`}>
            <form onSubmit={handleLogin} className="flex w-auto px-3 product560x:px-0 product560x:w-[480px] h-[352px] border-none outline-none flex-col justify-center gap-6 text-sm">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col relative gap-1 text-[#858585] tracking-wide">
                        <FaIdCard className="absolute text-lg left-4 top-5" />
                        <input 
                            type="text" 
                            ref={userPassportId} 
                            autoComplete="username" 
                            placeholder={data.titleInputFirst} 
                            className={`border focus:shadow-register transition-all duration-200 ${isDarkMode ? "bg-transparent text-white" : "bg-white text-[#101828]"} border-[#e3e8ec] h-14 text-base pl-11 rounded-xl outline-none`} 
                        />
                        {error && <span className="text-xs text-red-600">{data.error1}</span>}
                        {error2 && <span className="text-xs text-red-600">{data.loginError}</span>}
                    </div>
                    <div className="flex flex-col relative gap-1 text-[#858585]">
                        <FaLock className="absolute text-lg left-4 top-5" />
                        <input 
                            type={show ? "text" : "password"} 
                            autoComplete="current-password" 
                            ref={userPassword} 
                            placeholder={data.titleInputSecond} 
                            className={`border border-[#e3e8ec] focus:shadow-register ${isDarkMode ? "bg-transparent text-white" : "bg-white text-[#101828]"} transition-all duration-200 h-14 text-base pl-11 rounded-xl outline-none`}
                        />
                        {show ? <FaEye onClick={showHide} className="absolute text-xl cursor-pointer right-4 top-5" /> : <FaEyeSlash className="absolute text-xl cursor-pointer right-4 top-5" onClick={showHide} /> }
                        {error && <span className="text-xs text-red-600">{data.error2}</span>}
                        {error2 && <span className="text-xs text-red-600">{data.loginError}</span>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex w-[60%] flex-col justify-center gap-3 items-center">
                        <a href="#" className="text-[#53079d] text-[13px] no-underline">{language == "am" ? "Մոռացե՞լ եք գաղտնաբառը" : language == "en" ? "Forgot your password?" : language == "ru" ? "Забыли пароль?" : null}</a>
                        <button type="submit" className="rounded-xl outline-none w-full hover:opacity-80 transition-all duration-300 font-semibold bg-[#53079d] px-6 text-white tracking-wide py-4">{language == "am" ? "Մուտք" : language == "en" ? "Login" : language == "ru" ? "Вход" : null}</button>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="flex w-[70%] flex-col justify-center gap-3 items-center text-center">
                        <p className="text-[#858585] text-[13px]">{data.loginInfo}</p>
                        <Link to="/register" className="w-full">
                            <button type="button" className={`rounded-2xl outline-none w-[80%] hover:bg-[#101828] hover:text-white transition-all duration-300 font-semibold ${isDarkMode ? "text-white border-white" : "text-[#101828] border-[#101828]"} border px-6 tracking-wide py-3`}>{language == "am" ? "Գրանցվել հիմա" : language == "en" ? "Register now" : language == "ru" ? "Зарегистрируйтесь сейчас" : null}</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
