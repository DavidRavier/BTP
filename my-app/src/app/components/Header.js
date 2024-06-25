/*
La configuration de Tailwind fait changer la couleur du header en fonction de la page 
d'un thème "sombre" (fond bleu et écriture blanche) à un thème clair (fond blanc écriture bleue), le tout 
grâce à une ternaire isLight? 
*/ 

import Image from "next/image";
import { Add, Facebook, Instagram, Phone, Search } from "@mui/icons-material";
import Link from "next/link";
import { Menu, MenuItem, Button, ListItemIcon } from "@mui/material";

function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null)};
}

export default function Header() {
    return (
        <>
        <div className=" flex justify-around items-baseline bg-primary">
        <div>
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
        </div>
        <div>

            <Button>Accueil</Button>
            <Link href={"#location"}>
            <Button>Location de matériel</Button>
            <Menu>
                <MenuItem>Terrassement & routes</MenuItem>
                <MenuItem>Transport & Manutention</MenuItem>
                <MenuItem>Élévation & travail en hauteur</MenuItem>
                <MenuItem>Démolition et gros œuvre</MenuItem>
            </Menu>
            </Link>
            <Link href={"#advice"}>
            <Button>Conseils</Button>
            </Link>
            <Button>Galerie photos</Button>
            <Link href={"#contact"}>
            <Button>
            Contact
            <ListItemIcon>
                <Facebook fontSize="small"/>
                <Instagram fontSize="small"/>
            </ListItemIcon>
            </Button>
            </Link>
        </div>
        <div>
            <ListItemIcon>
                <Phone fontSize="small" />
            </ListItemIcon>
        <button className="text-primary bg-light px-4 ">RÉSERVER</button>
        <ListItemIcon>
                <Search fontSize="small" />
            </ListItemIcon>
        </div>
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