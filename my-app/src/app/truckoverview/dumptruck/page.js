import Image from "next/image";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import DumptruckCard from "@/app/components/DumptruckCard";
import { ImageListItem } from "@mui/material";
import DumptruckList from "@/app/components/DumptruckList";
import MainSideview from "@/app/components/MainSideview";
import DenseMenu from "@/app/components/DenseMenu";

export default function Page() {
    return (
        <>
        <div className="bg-primary text-light max-w-screen-lg">
        <Header />
        <MainSideview />
        </div>
        <div className="flex">
            <DenseMenu />
            <DumptruckList  />
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