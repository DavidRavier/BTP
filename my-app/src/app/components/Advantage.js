

// Cette partie du travail a été mappée pour éviter de réécrire du code


import Image from "next/image";
import { ImageList, ImageListItem } from "@mui/material";

export default function Advantage() {
    return(
        <>
        <h2 className="text-dark font-restora mb-12 mt-16 mx-auto">Vos avantages chez MP Loc</h2>
        <div className="flex justify-around items-end text-primary max-h-screen md:flex-nowrap md:overflow-x-auto">
      <ImageList sx={{width: 1024, height: 150 }} cols={6}>
        {iconData.map((icon) => (
          <ImageListItem key={icon.img}>
            <Image src={icon.img} alt={icon.alt} width={60} height={60} className=""/>
            <p className="text-center text-xs max-w-24 mt-4">{icon.text}</p>
          </ImageListItem>
         ))}
      </ImageList>
        </div>
        </>
    )
}

const iconData = [
  {
    img:"/HomepageIcon1.png",
    text:"LARGE CHOIX D`ENGINS",
  },
  {
    img:"/HomepageIcon2.png",
    text:"ASSISTANCE 7 JOURS/7",
  },
  {
    img:"/HomepageIcon3.png",
    text:"LIVRAISON A DOMICILE",
  },
  {
    img:"/HomepageIcon4.png",
    text:"PRIX ATTRACTIFS",
  },
  {
    img:"/HomepageIcon5.png",
    text:"EQUIPE REACTIVE",
  },
  {
    img:"/HomepageIcon6.png",
    text:"CONSEILS POUR VOS TRAVAUX",
  },
]


/*
const location = [{
    id: 0,
    title: "TRANSPORT & MANUTENTION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?",
    width: 400,
    height: 370,
    src: "/images/Homepage_location1.jpg"
}, {
    id: 1,
    title:"TERRASSEMENT & ROUTES",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
}, {
    id: 2,
    title:"ELEVATION & TRAVAIL EN HAUTEUR",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
}, {
    id: 3,
    title:"DEMOLITION & GROS OEUVRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
}];

export default function Advantage() {
    return (
        <>
            <Image  
            src={location.src}
            alt="Différents travaux proposés"
            width={location.width}
            height={location.height}
            className=""
            />
            <p>{location.title}</p>
            <p>{location.text}</p>
        </>
    )
}
    */
