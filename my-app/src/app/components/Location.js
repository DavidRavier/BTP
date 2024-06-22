

// Cette partie du travail a été mappée pour éviter de réécrire du code
import Image from "next/image";
import GreyButton from "./GreyButton";
import WhiteButton from "./WhiteButton";
import BlueButton from "./BlueButton";


export default function Location() {
    return(
        <>
        <h2 className="text-dark font-restora text-center mb-12 mt-16 text-4xl ">Nos locations de matériel</h2>
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
        </>
    )
}


/*
const location = [{
    id: 0,
    title: "TRANSPORT & MANUTENTION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non vero exercitationem, reprehenderit, eligendi temporibus doloribus atque porro, at nostrum sapiente culpa veniam molestias?"
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

export default function List() {   
    const locationItems = location.map(item => <li>{item}</li>);
return <ul>{locationItems}</ul>;
}

Peut-être laisser le en savoir plus et le bouton à l'extérieur du .map 
voire même faire un component pour les deux boutons avec chacun une couleur et les mettre en disabled 
<p>EN SAVOIR PLUS</p>
<button>Réserver</button> //a mettre en touppercase
*/ 
