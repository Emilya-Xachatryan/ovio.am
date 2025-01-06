import FirstTopSide from "../Components/FirstTop/firstTopSide";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";

export default function MainLayout( {children} ) {
    return (
        <>
            <FirstTopSide />
            <Header />
                {children}
            <Footer />
        </>
    )
};
