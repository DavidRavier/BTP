import Image from "next/image";

export default function Test() {
    return (
        <>
            <div className="container mx-auto font-restora text-light">
                <Image 
                    src="/Homepage_contact1.png"
                    alt="Escalier en béton"
                    width={350}
                    height={500}
                    className=" left-80 top-12"
                />
                <Image 
                    src="/Homepage_contact2.png"
                    alt="Engin de chnantier vu du ciel"
                    width={1000}
                    height={500}
                    className=""
                />
            <p className="relative bottom-96 left-56 text-8xl t">Une question?</p>
            <p className="relative bottom-96 left-48 text-8xl mb-7">Contactez-nous</p>
            <button className=" relative bottom-96 left-96 px-4 text-light bg-secondary">CONTACTEZ-NOUS</button>
            <button className=" relative bottom-80 left-60 px-4 text-light bg-primary">05 34 51 57 91</button>
                <p className="relative left-2/3 bottom-96 max-w-80 text-sm">Votre agence est ouverte du lundi au vendredi de 7h à 12h et de 13h45 à 18h.</p>
            <p className="relative left-2/3 bottom-96 max-w-80 text-sm">Nous vous accueillons également dans nos autres agences.</p>
            </div>
        </>
    )
}