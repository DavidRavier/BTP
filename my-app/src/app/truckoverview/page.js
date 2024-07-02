import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DumptruckCard from "../components/DumptruckCard";
import { ImageListItem } from "@mui/material";
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

/*
utiliser un useState pour faire les effets de transition entre les différentes catégories
TRES IMPORTANT: cette catégorie se divise en deux entre les camions benne (dumptruck)
et les vehicules légers (lighttruck), le chemin doit changer en fonction de l'icone sur 
laquelle on appuie
*/