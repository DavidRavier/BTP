import { West, East } from "@mui/icons-material";
import { Divider, Link } from "@mui/material";
import Image from "next/image";

export default function Carousel() {
    return (
        <>
<section className="bg-primary text-light font-restora">
<div className="container mx-auto bg-primary">

      <Link href="/truckoverview">
          <Image
            className="relative -right-80 bottom-0"
            src="/Homepage_main.png"
            alt="Main image"
            width={400}
            height={100}
            priority
          />
        </Link>
        <h1 className="absolute right-52 bottom-80 text-6xl text-center max-w-2xl" >MP Loc, louer votre matériel de BTP</h1>
        <div className="absolute bottom-80 left-10">
        <West />
        </div>
        <div className="absolute bottom-80 right-10">
        <East />
        </div>
        <div className=" text-right relative right-3/4 bottom-24">
        <p>TRANSPORT & MANUTENTION — 1</p>
        <p>2</p>
        <p>3 </p>
        <p>4</p>
        </div>
        <Divider orientation="vertical" variant="middle" className="bg-light"/>
        <div>
        <h4 className="relative bottom-56 left-3/4">TITRE DE RÉFÉRENCEMENT</h4>
        <p className="text-xs max-w-64 relative bottom-52 left-3/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad. Sed temporibus at a error sunt dicta ratione.</p>
        </div>
        </div>
      </section>
        </>
    )
}