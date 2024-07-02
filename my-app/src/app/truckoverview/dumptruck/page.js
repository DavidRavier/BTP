import Image from "next/image";
import { Divider } from "@mui/material";
import Footer from "@/app/components/Footer";
import LightHeader from "@/app/components/LightHeader";
import GreyButton from "@/app/components/GreyButton";
import BlueButton from "@/app/components/BlueButton";

export default function Page() {
    return (
        <>
        <section className="max-w-screen-lg font-restora text-dark">
            <LightHeader />
        <div className="">
            <Image 
                        src="/dumptruck_orange.png"
                        alt="Camion benne orange"
                        className=""
                        width={600}
                        height={400}
                        priority
                    />
            <h1 className="text-5xl mb-4" >Camion benne simple cabine</h1>
            <p className="text-primary mb-2">CHARGE UTILE 1,1 T</p>
            <p className="text-sm pb-6">Ref. 0000000</p>
            <p className="text-sm pb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Saepe tempora delectus dolor eius dignissimos consequatur.
            Sapiente sequi vitae perspiciatis obcaecati!
            Id mollitia dolorum itaque impedit? Saepe veritatis id numquam magni obcaecati error
            dolore placeat esse, nisi ex, a blanditiis adipisci tempore sint, maiores eum est
            quidem explicabo eos labore nobis laborum architecto laudantium! Ipsam id mollitia
            esse iure? Facere, tempora.</p>
            <GreyButton />
            <BlueButton />
            <p className="">A partir de 250€ /jour</p>
        </div>

    <table className="table-auto bg-primary text-light p-12 mb-12">
        <thead>
            <tr>
                <th>Caractéristiques techniques</th>
                <th>Documentation</th>
                <th>Engins dans la même gamme</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dimensions & poids</td>
                <td>Performance</td>
                <td>Autres</td>
            </tr>
            <tr>
                <td>Hauteur: 2,22m</td>
                <td>Benne basculante: Oui</td>
                <td>Permis utilisé: Permis B</td>
            </tr>
            <tr>
                <td>Longueur: 6,03m</td>
                <td>Nombre de places: 3</td>
                <td>Coffre à outils: Non</td>
            </tr>
            <tr>
                <td>Largeur: 2,12m</td>
                <td>Poids total autorisé en charge: 3500 kg</td>
            </tr>
            <tr>
                <td>Largeur de la benne: 2m</td>
                <td>Moteur: Électrique</td>
            </tr>
            <tr>
                <td>Longueur de la benne: 3,60m</td>
            </tr>
            <tr>
                <td>Poids: 2 890 kg</td>
            </tr>
        </tbody>
    </table>
        </section>
        <Footer />
        </>
    )
    
}