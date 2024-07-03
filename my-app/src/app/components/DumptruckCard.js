import Image from "next/image"
import WhiteButton from "@/app/components/WhiteButton"
import BlueButton from "@/app/components/BlueButton"
import { Divider } from "@mui/material"
import Link from "next/link"

export default function DumptruckCard() {
    return (
        <>
            <article className="grid grid-cols-3 max-w-3xl font-restora text-dark">
                <Image  
                    src="/dumptruck_orange.png"
                    alt="camion benne orange"
                    className="py-8"
                    width={250}
                    height={12}
                />
                <div className="py-8">
                <h2 className="text-2xl">Camion benne simple cabine</h2>
                <p className="text-primary">CHARGE UTILE 1,1T</p>
                <p className="pb-4">Ref. 0000000</p>
                <p>Benne basculante: Oui</p>
                 <p>Nombre de places: 3</p>
                <p className="pb-4">PTAC (kg): 3500</p>
                <Link href={"/truckoverview/dumptruck/dumptruckspecs"}>
                <WhiteButton />
                </Link>
                <BlueButton />
                </div>
                <div>
                <p className="bg-primary text-light text-right px-2 py-2 mt-6 max-w-48">A partir de 250€ /jour</p>
                </div>
                <Divider variant="middle" className="mb-4"/>
            </article>
        </>
    )
}

