
/*
A faire plus tard: rendre cette partie dynamique grâce aux state dans React. La solution serait sûrement d'utiliser 
un hover et un transform pour faire grossir les images lorsque l'utilisateur passe dessus, 
et de maintenir cette état une fois que l'image est sélectionnée (avec useState?). Dans l'idéal, changer également le menu
en dessous, afin que celui des lighttruck et des dumptruck soient au même endroit

*/

import { ImageListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function MainSideview() {
    return (
        <>
            <div className="bg-primary text-light max-w-screen-lg font-restora">
            <h1 className="text-7xl text-center mb-6">Transport & Manutention</h1>
            <div className="container mx-auto grid grid-cols-5">
            {sectionData.map((section) => (
                <ImageListItem key={section.img}>
                <div className="ml-6">
                <Link href={section.link}>
                    <Image src={section.img} alt={section.alt} width={150} height={100} />
                </Link>
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
        link:"/truckoverview",
    },
    {
        img:"/Transport2.png",
        alt:"élévation de charges",
        section:"ÉLÉVATION DE CHARGES",
        link:"/truckoverview",
    },
    {
        img:"/Homepage_location1.png",
        alt:"véhicule léger",
        section:"VÉHICULE LÉGER",
        link:"/truckoverview",
    },
    {
        img:"/Transport3.png",
        alt:"camion-benne",
        section:"CAMION-BENNE",
        link:"/truckoverview/dumptruck",
    },
    {
        img:"/Transport5.png",
        alt:"remorque",
        section:"REMORQUE",
        link:"/truckoverview",
    },
]

/*
utiliser un useState pour faire les effets de transition entre les différentes catégories
TRES IMPORTANT: cette catégorie se divise en deux entre les camions benne (dumptruck)
et les vehicules légers (lighttruck), le chemin doit changer en fonction de l'icone sur 
laquelle on appuie
*/