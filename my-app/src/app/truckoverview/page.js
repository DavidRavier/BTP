import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DumptruckCard from "../components/DumptruckCard";
import { ImageListItem } from "@mui/material";

export default function Page() {
    return (
        <div className="">
        <Header />
            <h1 className=" text-light font-restora text-5xl text-center">Transport & Manutention</h1>
            <div className="bg-primary text-light flex container-fluid">
            {sectionData.map((section) => (
                <ImageListItem key={section.img}>
                    <Image src={section.img} alt={section.alt} width={section.width} height={section.height} />
                    <h3>{section.section}</h3>
                </ImageListItem>
            ))}
            <h4 className="text-light text-center">TITRE DE RÉFÉRENCEMENT</h4>
                <p className="text-light text-center text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus ut lectus euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin congue ex eget mollis. Donec vitae.</p>
            </div>
            <DumptruckCard />
            <Footer  />
        </div>
    
    )
}

const sectionData = [
    {
        img:"/Transport1.png",
        alt:"matériel de démémagement",
        width:200,
        height:12,
        section:"MATÉRIEL DE DÉMÉNAGEMENT",
        title:"TITRE DE RÉFÉRENCEMENT",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus ut lectus euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin congue ex eget mollis. Donec vitae."
    },
    {
        img:"/Transport2.png",
        alt:"élévation de charges",
        width:200,
        height:12,
        section:"ÉLÉVATION DE CHARGES",
        title:"TITRE DE RÉFÉRENCEMENT",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus ut lectus euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin congue ex eget mollis. Donec vitae."
    },
    {
        img:"/Transport3.png",
        alt:"camion-benne",
        width:200,
        height:12,
        section:"CAMION-BENNE",
        title:"TITRE DE RÉFÉRENCEMENT",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus ut lectus euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin congue ex eget mollis. Donec vitae."
    },
    {
        img:"/Homepage_location1.png",
        alt:"véhicule léger",
        width:200,
        height:12,
        section:"VÉHICULE LÉGER",
        title:"TITRE DE RÉFÉRENCEMENT",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus ut lectus euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin congue ex eget mollis. Donec vitae."
    },
    {
        img:"/Transport5.png",
        alt:"remorque",
        width:200,
        height:12,
        section:"REMORQUE",
        title:"TITRE DE RÉFÉRENCEMENT",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus ut lectus euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin congue ex eget mollis. Donec vitae."
    },
]

/*
utiliser un useState pour faire les effets de transition entre les différentes catégories
TRES IMPORTANT: cette catégorie se divise en deux entre les camions benne (dumptruck)
et les vehicules légers (lighttruck), le chemin doit changer en fonction de l'icone sur 
laquelle on appuie
*/