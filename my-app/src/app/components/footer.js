import Image from "next/image";
import Divider from "@mui/material/Divider";

export default function Footer() {
    return (
        <div className="grid text-light bg-primary lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Image
          src="/MPLoc_transparent.png"
          alt="Logo MPLoc"
          className="mr-8 ml-4 my-8"
          width={200}
          height={12}
          />
            <h2 className={`my-8 text-xs py-2`}>
              Informations
              <Divider variant="middle" component="p" className="bg-light my-2"/>
                <p>Accueil</p>
                <p>Nos agences</p>
                <p>Locations matériaux</p>
                  <p>Gros matériel</p>
                  <p>Petit matériel</p>
                  <p>Matériel spécifique</p>
                  <p>Matériel benne</p>
                <p>Contact</p>
            </h2>
  
            <h2 className={`my-8 text-xs py-2`}>
              Contact{" "}
              <Divider variant="middle" component="p" className="bg-light my-2"/>
                <p>Agence de Muret:</p>
                <p>Lorem</p>
                <p>Agence de Carères:</p>
                <p>Lorem</p>
                <p>Agence Autérive</p>
                <p>Lorem</p>
                <p>Tél: 05 34 51 57 91</p>
                <p>Mail: loremipsum@lorem.com</p>
            </h2>
  
            <h2 className={`my-8 text-xs py-2`}>
              Informations{" "}
              <Divider variant="middle" component="p" className="bg-light mt-2"/>
              <Image
                src="/Logo_editions_corses.png"
                alt="logo editions corses"
                className="my-4"
                width={150}
                height={12}
                priority
              />
              <p>© 2024 - Les éditions corses</p>
              <p>Pexels</p>
              <p>Mentions légales</p>
            </h2>
        </div>
    )
}