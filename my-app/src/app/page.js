import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhiteButton from "./components/WhiteButton";
import BlueButton from "./components/BlueButton";
import GreyButton from "./components/GreyButton";
import { Button, Divider, Link } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import Location from "./components/Location";
import Advantage from "./components/Advantage";
import Contact from "./components/Contact";
import Advice from "./components/Advice";
import Agency from "./components/Agency";


export default function Home() {
  return (
    <main className="grid min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <section className="bg-primary">
      <Link href="/TruckOverview">
          <Image
            className=""
            src="/Homepage_main.png"
            alt="Main image"
            width={400}
            height={100}
            priority
          />
        </Link>
        <div className="flex">
        <WestIcon />
        <h1 className="text-light text-6xl text-center font-restora max-w-2xl" >MP Loc, louer votre matériel de BTP</h1>
        <EastIcon />
        </div>
        <div>
        <p>TRANSPORT ET MANUTENTION — 1</p>
        <p>TERRASSEMENT & ROUTES — 2</p>
        <p>ÉLÉVATION & TRAVAIL EN HAUTEUR — 3 </p>
        <p>DÉMOLITION & GROS ŒUVRE — 4</p>
        <Divider orientation="vertical" className="bg-light"/>
        <h4 className="text-light">TITRE DE RÉFÉRENCEMENT</h4>
        <p className="text-light text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad. Sed temporibus at a error sunt dicta ratione.</p>
        </div>
      </section>
      </div>
        <Advantage  />
        <Location />
        <Advice />
        <Agency />
        
        <Footer />
    </main>
  );
}
