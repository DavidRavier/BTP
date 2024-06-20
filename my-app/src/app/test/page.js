import Image from "next/image";


export default function Contact() {
    return (
    <div>
    <Image 
        className=""
        src="/Homepage_contact2.png"
        alt="Engin de chantier vu du ciel"
        width={1000}
        height={250}
    />
    <Image 
        className=""
        src="/Homepage_contact1.png"
        alt="Escalier en béton"
        width={500}
        height={125}
    />
    <p>Une question?</p>
    <p>Contactez-nous</p>
    <button className="bg-gray-400 px-3">CONTACTEZ-NOUS</button>
    <button className="bg-blue-400 px-3">05 34 51 57 91</button>
    </div>
    )
}