import Image from "next/image";
import Link from "next/link";

export default function WhiteTruckCard() {
  return (
    <article className="shadow-lg max-w-xs font-restora">
      <div className="">
        <Image  
          src="/Transport4.png"
          alt="Camion benne"
          width={320}
          height={600}
          className=""
        />
        <p className=" relative bottom-48 bg-primary text-light py-2 pl-4 w-48">A partir de 250€ /jour</p>
      </div>
      <div className="text-dark">
        <div className="px-4">
        <h3 className="text-xl">Camion benne simple cabine</h3>
        <h4 className="text-primary mb-4">CHARGE UTILE 1,1 T</h4>
        <p className="">Benne basculante: Oui</p>
        <p>Nombre de places: 3</p>
        <p className="mb-4">PTAC (kg): 3500</p>
        </div>
          <div className="flex">
            <button className="bg-primary text-light mx-2 mt-2 px-8">RESERVER</button>
            <Link href="/truckoverview/lighttruck">
            <button className="bg-light mx-2 mt-2 p-2">EN SAVOIR PLUS</button>
            </Link>
          </div>
      </div>
    </article>
  )
}
