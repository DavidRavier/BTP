

// Cette partie du travail a été mappée pour éviter de réécrire du code
import Image from "next/image";
import GreyButton from "./GreyButton";
import WhiteButton from "./WhiteButton";
import BlueButton from "./BlueButton";
import { ImageList, ImageListItem } from "@mui/material";
import Link from "next/link";


export default function Location() {
    return(
        <>
        <Link href="#location">
        <h2 className="text-dark font-restora mx-auto mb-12 mt-16">Nos locations de matériel</h2>
        </Link>
        <GreyButton />
        <div className="flex flex-col items-center justify-evenly">
        <ImageList sx={{width:1000, height: 800}} cols={4}>
        {locationData.map((location) => (
          <ImageListItem key={location.img}>
          <h3 className="text-dark font-restora text-xl text-center mb-4 mt-8 max-w-xs">{location.title}</h3>
            <Image src={location.img} alt={location.alt} width={400} height={1000}/>
            <p className="text-dark fonr font-restora text-sm max-w-52 text-clip">{location.text}</p>
            <WhiteButton />
          <BlueButton />
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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
  }, 
  {
    img:"/Homepage_location2.png",
    alt:"image BTP",
    title:"TERRASSEMENT & ROUTES",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
    }, 
  {
    img:"/Homepage_location3.png",
    alt:"image BTP",
    title:"ÉLÉVATION & TRAVAIL EN HAUTEUR",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
    }, 
  {
    img:"/Homepage_location4.png",
    alt:"image BTP",
    title:"DÉMOLITION & GROS ŒUVRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
    }
];
        
        /*
        <ImageList sx={{ width: 1000, height: 2000}} cols={4}>
        {locationData.map((location) => (
          <ImageListItem key={location.img}>
          <h3>{location.title}</h3>
            <Image src={location.img} alt={location.alt}/>
            <p>{location.text}</p>
            <WhiteButton />
          <BlueButton />
          </ImageListItem>
        ))}
      </ImageList>

-----

<Link href="#location">
        <h2 className="text-dark font-restora text-center mb-12 mt-16 text-4xl ">Nos locations de matériel</h2>
        </Link>
        <GreyButton />
      <section className="flex justify-evenly">
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">TRANSPORT & MANUTENTION</h3>
          <Image 
            src="/Homepage_location1.png"
            alt="icone BTP"
            width={200}
            height={50}
            className="mb-4"
          />
          <p className="text-dark fonr font-restora text-sm max-w-52">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad.</p>
          <WhiteButton />
          <BlueButton />
        </div>
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">TERRASSEMENT & ROUTES</h3>
          <Image
          src="/Homepage_location2.png"
          alt="icone BTP"
          width={200}
          height={50}
          className="mb-4"
          />
        </div>
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">ÉLÉVATION & TRAVAIL EN HAUTEUR</h3>
          <Image
          src="/Homepage_location3.png"
          alt="icone BTP"
          width={200}
          height={50}
          className="mb-4"
          />
        </div>
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">DÉMOLITION & GROS ŒUVRE</h3>
          <Image
          src="/Homepage_location4.png"
          alt="icone BTP"
          width={200}
          height={50}
          className="mb-4"
          />
        </div>
      </section>

      ------

export default function List() {   
    const locationItems = location.map(item => <li>{item}</li>);
return <ul>{locationItems}</ul>;
}

Peut-être laisser le en savoir plus et le bouton à l'extérieur du .map 
voire même faire un component pour les deux boutons avec chacun une couleur et les mettre en disabled 
<p>EN SAVOIR PLUS</p>
<button>Réserver</button> //a mettre en touppercase
*/ 
