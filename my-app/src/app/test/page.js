
import Image from "next/image";
import { AddIcon, FacebookIcon, InstagramIcon, PhoneIcon, SearchIcon } from "@mui/icons-material";
import { Breadcrumbs, Link } from "@mui/material";


export default function Header() {
    return (
        <div className="flex bg-primary">

            <Image
            src="/MPLoc_transparent.png"
            alt="MPLoc Logo"
            className="m-8"
            width={140}
            height={30}
            priority
            />  
            <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" key="1" color="white" href="/">Accueil</Link>
            <Link>Location de matériel</Link>
            <Link>Conseils</Link>
            <Link>Galerie photos</Link>
            <Link>Contact</Link>
            </Breadcrumbs>
            <button className="bg-light text-primary px-4">RÉSERVER</button>
        </div>
        );
}; 