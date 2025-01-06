import DarkMode from "../Components/DarkMode/darkmode";
import SlicedFooter from "../Components/SlicedFooter/slicedFooter";
import SlicedHeader from "../Components/SlicedHeader/slicedHeader";

export default function SlicedHeaderFooterLayout( {children} ) {
    return (
        <>
            <SlicedHeader />
                {children}
                <DarkMode />
            <SlicedFooter />
        </>
    )
};
