import Image from "next/image";

export default function WhiteTruckCard() {
  return (
    <article className="shadow-lg max-w-sm">
      <div className="">
        <Image  
          src="/Transport4.png"
          alt="Camion benne"
          width={400}
          height={800}
          className=""
        />
        <p className=" relative bottom-56 bg-primary text-light py-2 w-48">A partir de 250€ /jour</p>
      </div>
      <div className="text-dark">
        <div className="px-4">
        <h3 className="text-xl">Camion benne simle cabine</h3>
        <h4 className="text-primary mb-4">CHARGE UTILE 1,1 T</h4>
        <p className="">Benne basculante: Oui</p>
        <p>Nombre de places: 3</p>
        <p className="mb-4">PTAC (kg): 3500</p>
        </div>
          <div className="flex">
            <button className="bg-primary text-light mx-2 mt-6 px-12 text-l">RESERVER</button>
            <button className="bg-light mx-2 mt-6 p-4 text-l">EN SAVOIR PLUS</button>
          </div>
      </div>
    </article>
  )
}

/*
const truckData = [
    {
        img:"/Transport4.png",
        alt:"visuel camion benne de location",
        title:"Camion benne simle cabine",
        description:"CHARGE UTILE 1,1 T",
        dump:"Benne basculante: Oui",
        seats:"Nombre de places: 3",
        weight:"PTAC (kg): 3500",
    }
]
*/