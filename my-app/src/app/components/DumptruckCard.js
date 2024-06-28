import Image from "next/image"
import WhiteButton from "./WhiteButton"
import BlueButton from "./BlueButton"
import { Divider } from "@mui/material"
import Link from "next/link"

export default function DumptruckCard() {
    return (
        <>
            <article className="grid grid-cols-3 max-w-screen-lg">
                <Image  
                    src="/dumptruck_orange.png"
                    alt="camion benne orange"
                    className="py-8"
                    width={300}
                    height={12}
                />
                <div className="text-dark font-restora px-4 py-8">
                <h2 className="text-2xl">Camion benne simple cabine</h2>
                <p className="text-primary">CHARGE UTILE 1,1T</p>
                <p className="pb-4">Ref. 0000000</p>
                <p>Benne basculante: Oui</p>
                 <p>Nombre de places: 3</p>
                <p className="pb-4">PTAC (kg): 3500</p>
                <Link href={"/truckoverview/dumptruck"}>
                <WhiteButton />
                </Link>
                <BlueButton />
                </div>
                <div>
                <p className="bg-primary text-light text-right px-4 py-2 mt-6">A partir de 250€ /jour</p>
                </div>
                <Divider variant="middle" className="mb-4"/>
            </article>
        </>
    )
}

