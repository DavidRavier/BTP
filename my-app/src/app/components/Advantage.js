

/*
Cette partie du travail a été mappée pour éviter de réécrire du code. Toutefois, il reste à gérer 
l'alignement qui, à mon avis, doit se faire par le bas pour éviter l'effet "vague" dû au changement
de tailles des icones.
*/


import Image from "next/image";
import { ImageList, ImageListItem } from "@mui/material";

export default function Advantage() {
    return(
        <>
        <h2 className="text-dark font-restora mb-12 mt-16 mx-auto">Vos avantages chez MP Loc</h2>
        <div className="flex text-primary max-h-screen ml-12 md:flex-nowrap md:overflow-x-auto">
      <ImageList sx={{width: 1024, height: 150 }} cols={6}>
        {iconData.map((icon) => (
          <ImageListItem key={icon.img}>
          <div className="items-end">
            <Image src={icon.img} alt={icon.alt} width={60} height={60} className=""/>
          </div>
            <p className="items-end text-center text-xs max-w-24 mt-4">{icon.text}</p>
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
