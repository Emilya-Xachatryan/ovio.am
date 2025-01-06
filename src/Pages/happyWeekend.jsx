import BottomContact from "../Components/BottomContact/bottomContact";
import DarkMode from "../Components/DarkMode/darkmode";
import HappyWeekend from "../Components/HappyWeekend/happyWeekend";
import MainLayout from "../Layouts/MainLayout";

export default function HappyWeekendPage() {
    return (
        <MainLayout>
            <HappyWeekend />
            <DarkMode />
            <BottomContact />
        </MainLayout>
    )
}