import Image from "next/image";


export default function Contact() {
    return (
    <div className="relative">
        <Image 
            className="absolute"
            src="/Homepage_contact2.png"
            alt="Engin de chantier vu du ciel"
            width={4000}
            height={250}
        />
        <div className="absolute">
            <Image 
                className="flex justify-center items-center"
                src="/Homepage_contact1.png"
                alt="Escalier en béton"
                width={400}
                height={125}
            />
            <p className="text-light max-w-80">Votre agence est ouverte du lundi au vendredi de 7h à 12h et de 13h45 à 18h.</p>
            <p className="text-light max-w-80">Nous vous accueillons également dans nos autres agences.</p>
        </div>
        <div className=" text-center absolute">
            <p className="text-6xl">Une question?</p>
            <p className="text-6xl mb-7">Contactez-nous</p>
            <button className="bg-secondary text-light px-4 mb-3">CONTACTEZ-NOUS</button>
            <button className="bg-primary text-light px-4">05 34 51 57 91</button>
        </div>
    </div>
    )
}