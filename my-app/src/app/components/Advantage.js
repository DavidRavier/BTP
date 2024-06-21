

// Cette partie du travail a été mappée pour éviter de réécrire du code


import Image from "next/image";





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

/*
Peut-être laisser le en savoir plus et le bouton à l'extérieur du .map 
voire même faire un component pour les deux boutons avec chacun une couleur et les mettre en disabled 
<p>EN SAVOIR PLUS</p>
<button>Réserver</button> //a mettre en touppercase
*/ 
