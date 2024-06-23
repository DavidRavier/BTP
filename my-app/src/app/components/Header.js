/*
La configuration de Tailwind fait changer la couleur du header en fonction de la page 
d'un thème "sombre" (fond bleu et écriture blanche) à un thème clair (fond blanc écriture bleue), le tout 
grâce à une ternaire isLight? 
*/ 

import Image from "next/image";
import { AddIcon, FacebookIcon, InstagramIcon, PhoneIcon, SearchIcon } from "@mui/icons-material";
import Link from "next/link";



export default function Header() {
    return (
        <>
        <div className=" bg-primary">
            <Link href="/">
            <Image
            src="/MPLoc_transparent.png"
            alt="MPLoc Logo"
            className="m-8"
            width={140}
            height={30}
            priority
            />  
            </Link>
        <button className="text-primary bg-light px-4 ">RÉSERVER</button>
        </div>
        </>
        );
}; 
        
       


/*

La configuration de Tailwind fait changer la couleur du header en fonction de la page 
d'un thème "sombre" (fond bleu et écriture blanche) à un thème clair (fond blanc écriture bleue), le tout grâce à une ternaire


import Image from "next/image";
import Menu from "@mui/material/Menu";

function Header() {
    return (
       
        <Image
        src="/MPLoc_transparent.png"
        alt="MPLoc Logo"
        className="m-8"
        width={140}
        height={30}
        priority
        />  

        );
}; 
        
export default function MyApp() {
    return (
        <div>
            <Header />
        </div>

    )
}
        
       


*/

/*

import Image from "next/image";
import { FacebookIcon, InstagramIcon, PhoneIcon, SearchIcon} from "@mui/icons-material"; 


function Header() {
    return (
<>
        <Image
        src="/MPLoc_transparent.png"
        alt="MPLoc Logo"
        className="m-8"
        width={140}
        height={30}
        priority
        />  
        <nav>
            
        </nav>
        <svg data-testid="FacebookIcon"></svg>
          
</>
        );
}; 

export default function MyHeader() {
    return (
        <header>
            <Header />
        </header>
    )
}
        
       


/*

La configuration de Tailwind fait changer la couleur du header en fonction de la page 
d'un thème "sombre" (fond bleu et écriture blanche) à un thème clair (fond blanc écriture bleue), le tout grâce à une ternaire


import Image from "next/image";
import Menu from "@mui/material/Menu";

function Header() {
    return (
       
        <Image
        src="/MPLoc_transparent.png"
        alt="MPLoc Logo"
        className="m-8"
        width={140}
        height={30}
        priority
        />  

        );
}; 
        
export default function MyApp() {
    return (
        <div>
            <Header />
        </div>

    )
}
        
       


  <div className="">
          <nav>
              <ul>Accueil</ul>
              <ul>Location de matériel</ul>
              <ul>Conseils</ul>
              <ul>Galerie photos</ul>
              <ul>Contact</ul>
          </nav>
      </div>   


*/