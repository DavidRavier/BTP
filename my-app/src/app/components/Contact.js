import Image from "next/image";


export default function Contact() {
    return (
    <section className="max-w-screen-lg">
        <Image 
            className="w-full relative z-10"
            src="/Homepage_contact2.png"
            alt="Engin de chantier vu du ciel"
            width={4000}
            height={250}
        />
        <div className="absolute justify-center items-center">
            <Image 
                className=""
                src="/Homepage_contact1.png"
                alt="Escalier en béton"
                width={275}
                height={125}
            />
            <p className="max-w-80 z-30">Votre agence est ouverte du lundi au vendredi de 7h à 12h et de 13h45 à 18h.</p>
            <p className="max-w-80 z-30">Nous vous accueillons également dans nos autres agences.</p>
        </div>
        <div className="absolute justify-center items-center">
            <p className="text-center text-6xl">Une question?</p>
            <p className="text-center text-6xl mb-7">Contactez-nous</p>
            <button className="m-auto mb-3">CONTACTEZ-NOUS</button>
            <button className="m-auto">05 34 51 57 91</button>
        </div>
    </section>
    )
}