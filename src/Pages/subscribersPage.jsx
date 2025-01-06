import BottomContact from "../Components/BottomContact/bottomContact"
import DarkMode from "../Components/DarkMode/darkmode"
import Subscribers from "../Components/Subscribers/subscribers"
import MainLayout from "../Layouts/MainLayout"

export default function SubscribersPage() {
    return (
        <MainLayout>
            <Subscribers />
            <DarkMode />
            <BottomContact />
        </MainLayout>
    )
}