import { WestIcon, EastIcon } from "@mui/icons-material";
import { Divider, Link } from "@mui/material";
import Image from "next/image";

export default function Carousel() {
    return (
        <>
<section className="bg-primary">
      <Link href="/truckoverview">
          <Image
            className=""
            src="/Homepage_main.png"
            alt="Main image"
            width={400}
            height={100}
            priority
          />
        </Link>
        <div className="flex items-baseline">
        <WestIcon />
        <h1 className="text-light text-6xl text-center font-restora max-w-2xl" >MP Loc, louer votre matériel de BTP</h1>
        <EastIcon />
        </div>
        <div>
        <p>TRANSPORT ET MANUTENTION — 1</p>
        <p>TERRASSEMENT & ROUTES — 2</p>
        <p>ÉLÉVATION & TRAVAIL EN HAUTEUR — 3 </p>
        <p>DÉMOLITION & GROS ŒUVRE — 4</p>
        <Divider orientation="vertical" variant="middle" className="bg-light"/>
        <h4 className="text-light">TITRE DE RÉFÉRENCEMENT</h4>
        <p className="text-light text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad. Sed temporibus at a error sunt dicta ratione.</p>
        </div>
      </section>
        </>
    )
}