import Image from "next/image";


export default function Contact() {
    return (
    <section className="">
            <Image 
            className="relative -bottom-96"
            src="/Homepage_contact2.png"
            alt="Engin de chantier vu du ciel"
            width={1024}
            height={300}
        />
        <div className="">
            <Image 
                className="relative bottom-63 left-96"
                src="/Homepage_contact1.png"
                alt="Escalier en béton"
                width={275}
                height={125}
            />
            <p className="relative bottom-96 left-2/3 text-dark max-w-80">Votre agence est ouverte du lundi au vendredi de 7h à 12h et de 13h45 à 18h.</p>
            <p className="relative bottom-96 left-2/3 text-dark max-w-80">Nous vous accueillons également dans nos autres agences.</p>
        </div>
        <div className="">
            <p className="relative bottom-96  text-dark text-6xl">Une question?</p>
            <p className="relative bottom-96 text-dark text-6xl mb-7">Contactez-nous</p>
            <button className="relative bottom-96 text-dark mb-3">CONTACTEZ-NOUS</button>
            <button className="relative bottom-56 text-dark">05 34 51 57 91</button>
        </div>
    </section>
    )
}