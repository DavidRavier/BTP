

// Cette partie du travail a été mappée pour éviter de réécrire du code
import Image from "next/image";
import GreyButton from "./GreyButton";
import { ImageList, ImageListItem } from "@mui/material";
import Link from "next/link";


export default function Location() {
    return(
        <>
        <Link href="#location">
        <h2 className="text-dark font-restora mb-12 mt-16 text-center">Nos locations de matériel</h2>
        </Link>
        <GreyButton />
        <div className="flex flex-col items-center justify-between">
        <ImageList sx={{width:1000, height: 700}} cols={4}>
        {locationData.map((location) => (
          <ImageListItem key={location.img}>
          <h3 className="text-dark font-restora text-xl text-center mb-4 mt-8 max-w-xs">{location.title}</h3>
            <Image src={location.img} alt={location.alt} width={240} height={800}/>
            <p className="text-dark font-restora text-center text-sm max-w-52 text-clip mt-6">{location.text}</p>
            <div className="flex">
            <button className="text-dark bg-light font-restora mx-2 mt-6 text-sm">EN SAVOIR PLUS</button>
            <button className="text-light bg-primary font-restora mx-2 mt-6 px-4 text-sm">RÉSERVER</button>            </div>
          </ImageListItem>
        ))}
      </ImageList>
        </div>
        </>
    )
}


const locationData = [
  {
    img:"/Homepage_location1.png",
    alt:"image BTP",
    title: "TRANSPORT & MANUTENTION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, at nostrum sapiente culpa veniam molestias?"
  }, 
  {
    img:"/Homepage_location2.png",
    alt:"image BTP",
    title:"TERRASSEMENT & ROUTES",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, at nostrum sapiente culpa veniam molestias?"
    }, 
  {
    img:"/Homepage_location3.png",
    alt:"image BTP",
    title:"ÉLÉVATION & TRAVAIL EN HAUTEUR",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, at nostrum sapiente culpa veniam molestias?"
    }, 
  {
    img:"/Homepage_location4.png",
    alt:"image BTP",
    title:"DÉMOLITION & GROS ŒUVRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, at nostrum sapiente culpa veniam molestias?"
    }
]; 