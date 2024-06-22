

// Cette partie du travail a été mappée pour éviter de réécrire du code


import Image from "next/image";

export default function Advantage() {
    return(
        <>
        <h2 className="text-dark font-restora text-center mb-12 mt-16 text-4xl">Vos avantages chez MP Loc</h2>
        <section className="flex justify-evenly">
    <div className="mb-36">
      <Image  
        src="/HomepageIcon1.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">LARGE CHOIX D`ENGINS</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon2.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-20">ASSISTANCE 7 JOURS/7</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon3.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-20">LIVRAISON A DOMICILE</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon4.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">PRIX ATTRACTIFS</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon5.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">EQUIPE REACTIVE</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon6.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">CONSEILS POUR VOS TRAVAUX</p>
    </div>
      </section>
        </>
    )
}




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

Peut-être laisser le en savoir plus et le bouton à l'extérieur du .map 
voire même faire un component pour les deux boutons avec chacun une couleur et les mettre en disabled 
<p>EN SAVOIR PLUS</p>
<button>Réserver</button> //a mettre en touppercase
*/ 
