import DarkMode from "../Components/DarkMode/darkmode";
import Login from "../Components/Login/login";
import SlicedHeaderFooterLayout from "../Layouts/SlicedHeaderFooterLayout";

export default function LoginPage( {login, setLogin} ) {
    return (
        <SlicedHeaderFooterLayout>
            <Login loggedIn={login} setLoggedIn={setLogin} />
            <DarkMode />
        </SlicedHeaderFooterLayout>
    )
};
