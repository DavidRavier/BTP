import Image from "next/image";

export default function WhiteTruckCard() {
  return (
    <article className="shadow-lg max-w-lg">
      <div className="">
        <Image  
          src="/Transport4.png"
          alt="Camion benne"
          width={400}
          height={800}
          className=""
        />
        <p className="bg-primary text-light py-2 w-auto">A partir de 250€ /jour</p>
      </div>
      <div className="text-dark">
        <div className="px-4">
        <h3 className="text-xl">Camion benne simple cabine</h3>
        <h4 className="text-primary mb-4">CHARGE UTILE 1,1 T</h4>
        <p className="">Benne basculante: Oui</p>
        <p>Nombre de places: 3</p>
        <p className="mb-4">PTAC (kg): 3500</p>
        </div>
          <div className="flex mx-4 my-2">
            <button className="bg-primary text-light">RESERVER</button>
            <button className="bg-light">EN SAVOIR PLUS</button>
          </div>
      </div>
    </article>
  )
}