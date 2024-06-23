import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Divider } from "@mui/material";
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";
import DumptruckCard from "../components/DumptruckCard";

export default function Page() {
    return (
        <div>
        <Header />
            <h1 className="font-restora text-center-800">Transport & Manutention</h1>
            <div className="flex">
                <Image 
                    src="/transport1.png"
                    alt="Matériel de déménagement"
                    className=""
                    width={200}
                    height={12}
                />
                <Image 
                    src="/transport2.png"
                    alt="Elévation de charges"
                    className=""
                    width={200}
                    height={12}
                />
                <Image 
                    src="/transport3.png"
                    alt="Camion-benne"
                    className=""
                    width={200}
                    height={12}
                />
                <a >
                <Image 
                    src="/Homepage_location1.png"
                    alt="Véhicule léger"
                    className=""
                    width={200}
                    height={12}
                />
                </a>
                <Image 
                    src="/transport5.png"
                    alt="Remorque"
                    className=""
                    width={200}
                    height={12}
                />
            </div>
            <DumptruckCard />
            <Footer  />
        </div>
    
    )
}

/*
utiliser un useState pour faire les effets de transition entre les différentes catégories
TRES IMPORTANT: cette catégorie se divise en deux entre les camions benne (dumptruck)
et les vehicules légers (lighttruck), le chemin doit changer en fonction de l'icone sur 
laquelle on appuie
*/