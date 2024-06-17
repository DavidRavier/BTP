import Image from "next/image";

export default function Page() {
    return (
        <div className="flex bg-blue-600">

        <Image
        src="/MPLoc_transparent.png"
        alt="MPLoc Logo"
        className="mx-8"
        width={140}
        height={30}
        priority
        />  
          <div className="">
          <li>
              <ul>Accueil</ul>
              <ul>Location de matériel</ul>
              <ul>Conseils</ul>
              <ul>Galerie photos</ul>
              <ul>Contact</ul>
          </li>
      </div>   
        </div>
        );

      
}