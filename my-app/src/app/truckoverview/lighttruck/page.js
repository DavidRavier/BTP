import Image from "next/image";
import Header from "@/app/components/Header";

export default function Page() {
    return (
        <div>
            <div>

            <p className="text-gray-300 --tw-text-opacity: 0.3 text-9xl ">CAMION BENNE</p>
                    <Image 
                        src="/dumptruck_white.png"
                        alt="MPLoc Logo"
                        className=""
                        width={750}
                        height={320}
                        priority
                    />
                    <span>

                        <p>A partir de 250€/jour</p>
                        <h2>
                            <p>Camion benne</p>
                            <p>simple cabine</p>
                        </h2>
                            <p>Charge utile 1,1 t.</p>
                            <p>Ref. 0000000</p>
                    </span>
            </div>

            <div>
                <li>
                    <ol>Caractéristiques techniques</ol>
                    <ol>Documentation</ol>
                    <ol>Réserver votre engin</ol>
                </li>
            </div>    
        </div>
    )
    
}