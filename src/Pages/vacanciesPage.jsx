import BottomContact from "../Components/BottomContact/bottomContact";
import DarkMode from "../Components/DarkMode/darkmode";
import Vacancies from "../Components/Vacancies/vacancies";
import MainLayout from "../Layouts/MainLayout";

export default function VacanciesPage() {
    return (
        <MainLayout>
            <Vacancies /> 
            <DarkMode />
            <BottomContact />
        </MainLayout>
    )
}