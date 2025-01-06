import Help from "../Components/Help/help";
import MainLayout from "../Layouts/MainLayout";
import BottomContact from "../Components/BottomContact/bottomContact";
import DarkMode from "../Components/DarkMode/darkmode";

export default function HelpPage() {
    return (
        <MainLayout>
            <Help />
            <BottomContact />
            <DarkMode />
        </MainLayout>
    )
};
