import Image from "next/image";


export default function Contact() {
    return (
    <section className="font-restora">
            <Image 
            className="relative top-32"
            src="/Homepage_contact2.png"
            alt="Engin de chantier vu du ciel"
            width={1072}
            height={300}
        />
       
            <Image 
                className="absolute top-56 left-80"
                src="/Homepage_contact1.png"
                alt="Escalier en béton"
                width={300}
                height={150}
            />
            <p className="relative bottom-0 left-2/3 text-light max-w-80 text-sm">Votre agence est ouverte du lundi au vendredi de 7h à 12h et de 13h45 à 18h.</p>
            <p className="relative bottom-0 left-2/3 text-light max-w-80 text-sm">Nous vous accueillons également dans nos autres agences.</p>
            <p className="relative bottom-80 left-72 text-light text-7xl">Une question?</p>
            <p className="relative bottom-80 left-64 text-light text-7xl mb-7">Contactez-nous</p>
            <button className=" relative bottom-80 left-96 px-4 text-light bg-secondary">CONTACTEZ-NOUS</button>
            <button className=" relative bottom-72 left-56 px-4 text-light bg-primary">05 34 51 57 91</button>
   
    </section>
    )
}