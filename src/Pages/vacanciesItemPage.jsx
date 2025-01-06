import BottomContact from "../Components/BottomContact/bottomContact"
import DarkMode from "../Components/DarkMode/darkmode"
import VacancieItem from "../Components/VacancieItem/vacancieItem"
import MainLayout from "../Layouts/MainLayout"

export default function VacanciesItemPage() {
    return (
        <MainLayout>
            <VacancieItem />
            <DarkMode />
            <BottomContact />
        </MainLayout>
    )
}