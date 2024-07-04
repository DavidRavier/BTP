import Footer from "../components/Footer";
import Header from "../components/Header";
import WhiteTruckList from "../components/WhiteTruckList";
import MainSideview from "../components/MainSideview";

export default function Page() {
    return (
        <>

        <div className="bg-primary text-light max-w-screen-lg">
        <Header />
        <MainSideview />
        </div>
        <div className="grid-raw grid-cols-3">
            <WhiteTruckList />
        </div>
            <Footer  />
        </>
    
    )
}
