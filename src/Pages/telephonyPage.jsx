import BottomContact from "../Components/BottomContact/bottomContact";
import DarkMode from "../Components/DarkMode/darkmode";
import Telephony from "../Components/Telephony/telephony";
import MainLayout from "../Layouts/MainLayout";

export default function TelephonyPage() {
    return (
        <MainLayout>
            <Telephony />
            <DarkMode />
            <BottomContact />
        </MainLayout>
    )
}