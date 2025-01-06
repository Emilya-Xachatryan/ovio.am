import Navbar from "../Navbar/navbar";

export default function Header( {language} ){
    return (
        <header className="fixed z-40 top-0 product1260x:top-auto">
            <Navbar language={language} />
        </header>
    )
}