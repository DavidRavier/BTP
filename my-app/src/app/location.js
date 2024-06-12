

// Cette partie du travail a été mappée pour éviter de réécrire du code


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

/*
Peut-être laisser le en savoir plus et le bouton à l'extérieur du .map 
voire même faire un component pour les deux boutons avec chacun une couleur et les mettre en disabled 
<p>EN SAVOIR PLUS</p>
<button>Réserver</button> //a mettre en touppercase
*/ 
