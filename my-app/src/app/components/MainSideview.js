import { ImageListItem } from "@mui/material";
import Image from "next/image";

export default function MainSideview() {
    return (
        <>
            <div className="bg-primary text-light max-w-screen-lg font-restora">
            <h1 className="text-7xl text-center mb-6">Transport & Manutention</h1>
            <div className="container mx-auto grid grid-cols-5">
            {sectionData.map((section) => (
                <ImageListItem key={section.img}>
                <div className="ml-6">
                    <Image src={section.img} alt={section.alt} width={150} height={100} />
                </div>
                    <h3 className="text-lg mt-4 text-center max-w-sm mb-6">{section.section}</h3>
                </ImageListItem>
            ))}
            </div>
            <div className="flex-col text-center">
                <h4 className="text-lg mb-2">TITRE DE RÉFÉRENCEMENT</h4>
                <p className="text-sm pb-12 max-w-sm mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus ut lectus euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin congue ex eget mollis. Donec vitae.</p>
            </div>
        </div>
        </>
    )
}


const sectionData = [
    {
        img:"/Transport1.png",
        alt:"matériel de démémagement",
        section:"MATÉRIEL DE DÉMÉNAGEMENT",
    },
    {
        img:"/Transport2.png",
        alt:"élévation de charges",
        section:"ÉLÉVATION DE CHARGES",
    },
    {
        img:"/Transport3.png",
        alt:"camion-benne",
        section:"CAMION-BENNE",
    },
    {
        img:"/Homepage_location1.png",
        alt:"véhicule léger",
        section:"VÉHICULE LÉGER",
    },
    {
        img:"/Transport5.png",
        alt:"remorque",
        section:"REMORQUE",
    },
]

/*
utiliser un useState pour faire les effets de transition entre les différentes catégories
TRES IMPORTANT: cette catégorie se divise en deux entre les camions benne (dumptruck)
et les vehicules légers (lighttruck), le chemin doit changer en fonction de l'icone sur 
laquelle on appuie
*/