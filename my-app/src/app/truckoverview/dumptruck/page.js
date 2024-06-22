import Image from "next/image";
import { Divider } from "@mui/material";
import Footer from "@/app/components/Footer";

export default function Page() {
    return (
        <div>
            <Image 
                        src="/dumptruck_orange.png"
                        alt="Camion benne orange"
                        className=""
                        width={600}
                        height={320}
                        priority
                    />
    <h1>Camion benne simple cabine</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Saepe tempora delectus dolor eius dignissimos consequatur.
    Sapiente sequi vitae perspiciatis obcaecati!
    Id mollitia dolorum itaque impedit? Saepe veritatis id numquam magni obcaecati error
    dolore placeat esse, nisi ex, a blanditiis adipisci tempore sint, maiores eum est
    quidem explicabo eos labore nobis laborum architecto laudantium! Ipsam id mollitia
    esse iure? Facere, tempora.</p>

    <table>
        <thead>
            <tr>Caractéristiques techniques</tr>
            <tr>Documentation</tr>
            <tr>Engins dans la même gamme</tr>
        </thead>
    </table>
        <Footer />
        </div>
    )
    
}