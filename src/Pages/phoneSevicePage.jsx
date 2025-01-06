import BottomContact from "../Components/BottomContact/bottomContact";
import DarkMode from "../Components/DarkMode/darkmode";
import PhoneService from "../Components/PhoneService/phoneService";
import MainLayout from "../Layouts/MainLayout";

export default function PhoneServicePage() {
    return (
        <MainLayout>
            <PhoneService />
            <DarkMode />
            <BottomContact />
        </MainLayout>
    )
}