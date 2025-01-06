import Basket from "../Components/Basket/basket";
import BottomContact from "../Components/BottomContact/bottomContact";
import DarkMode from "../Components/DarkMode/darkmode";
import MainLayout from "../Layouts/MainLayout";

export default function BasketPage() {
    return (
        <MainLayout>
            <Basket />
            <BottomContact />
            <DarkMode />
        </MainLayout>
    )
};
