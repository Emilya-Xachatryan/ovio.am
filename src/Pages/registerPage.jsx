import DarkMode from "../Components/DarkMode/darkmode";
import Register from "../Components/Register/register";
import SlicedHeaderFooterLayout from "../Layouts/SlicedHeaderFooterLayout";

export default function LoginPage() {
    return (
        <SlicedHeaderFooterLayout>
            <Register />
            <DarkMode />
        </SlicedHeaderFooterLayout>
    )
};
