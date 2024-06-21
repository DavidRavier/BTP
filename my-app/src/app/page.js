import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhiteButton from "./components/WhiteButton";
import BlueButton from "./components/BlueButton";
import { Button } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

export default function Home() {
  return (
    <main className="grid min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="font-restora" >MP Loc, louer votre matériel de BTP</h1>
        <a href="/TruckOverview">
       <Image
          className=""
          src="/Homepage_main.png"
          alt="Main image"
          width={400}
          height={370}
          priority
        />
        </a>
        <h4>Titre de référencement</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad. Sed temporibus at a error sunt dicta ratione.</p>
      </div>
      <h2 className="text-dark font-restora text-center mb-12 mt-16 text-4xl">Vos avantages chez MP Loc</h2>
      <section className="flex justify-evenly">
    <div className="mb-36">
      <Image  
        src="/HomepageIcon1.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">LARGE CHOIX D`ENGINS</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon2.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-20">ASSISTANCE 7 JOURS/7</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon3.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-20">LIVRAISON A DOMICILE</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon4.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">PRIX ATTRACTIFS</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon5.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">EQUIPE REACTIVE</p>
    </div>
    <div className="mb-36">
      <Image 
        src="/HomepageIcon6.png"
        alt="icone BTP"
        width={50}
        height={50}
        className="mb-4"
      />
      <p className="text-primary text-center text-xs max-w-24">CONSEILS POUR VOS TRAVAUX</p>
    </div>
      </section>
        <h2 className="text-dark font-restora text-center mb-12 mt-16 text-4xl ">Nos locations de matériel</h2>
        <button className="bg-secondary px-4">05 34 51 57 91</button>
      <section className="flex justify-evenly">
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">TRANSPORT & MANUTENTION</h3>
          <Image 
            src="/Homepage_location1.png"
            alt="icone BTP"
            width={200}
            height={50}
            className="mb-4"
          />
        </div>
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">TERRASSEMENT & ROUTES</h3>
          <Image
          src="/Homepage_location2.png"
          alt="icone BTP"
          width={200}
          height={50}
          className="mb-4"
          />
        </div>
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">ELEVATION & TRAVAIL EN HAUTEUR</h3>
          <Image
          src="/Homepage_location3.png"
          alt="icone BTP"
          width={200}
          height={50}
          className="mb-4"
          />
        </div>
        <div>
          <h3 className="text-dark font-restora text-center mb-4 mt-8">DEMOLITION & GROS ŒUVRE</h3>
          <Image
          src="/Homepage_location4.png"
          alt="icone BTP"
          width={200}
          height={50}
          className="mb-4"
          />
        </div>
      </section>

      <section>
        <h2 className="text-dark font-restora text-left mb-12 mt-16 text-4xl">Nos conseils</h2>
        <div>
        <button className="bg-secondary px-4 mr-6 mb-8">05 34 51 57 91</button>
          <button className="bg-primary px-4 mb-8">Réserver</button>
          <Image 
            src="/Homepage_advice1.png"
              alt=""
              className="mb-4"
              width={350}
              height={12}
          />
          <h4 className="text-dark font-restora text-xl mb-4">Un petit coup de pelle?</h4>
            <p className="text-dark font-restora text-sm max-w-sm mb-4">    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aperiam nulla facere! Harum dolores enim iusto doloribus aliquam fugiat voluptatem ex blanditiis asperiores, quas molestiae sit voluptas illum saepe! Laboriosam unde quas beatae dolorum est provident modi amet nam quam. Amet officiis, nam minus at vero rem officia ullam culpa delectus voluptates, blanditiis quasi vel libero modi optio omnis sapiente.</p>
            <Button variant="text" disableElevation className="text-dark font-restora text-sm text-left">EN SAVOIR PLUS</Button>
        </div>
      </section>
      <div>
        <h2>Nos conseils</h2>
        
            

        <Image
              src="/Homepage_advice2.png"
              alt=""
              className=""
              width={500}
              height={12}
              priority
            />
      </div>

      <div>
        <h2>Vos agences MP Loc</h2>
        <Image
              src="/Homepage_agency1.png"
              alt=""
              className=""
              width={500}
              height={12}
              priority
            />
            <h4>Titre de référencement</h4>
        <h3>Muret</h3><p>Lorem ipsum dolor sit amet consectetur</p>
        <h3>Cazères</h3><p>Lorem ipsum dolor sit amet consectetur</p>
        <h3>Autérive</h3><p>Lorem ipsum dolor sit amet consectetur</p>
        <Image
              src="/Homepage_agency2.png"
              alt=""
              className=""
              width={350}
              height={12}
              priority
            />
      </div>

      <div>

      
        <p>Votre agence est ouverte du lundi au vendredi de 7h à 12h et de 13h45 à 18h.</p>
        <p> Nous vous accueillons également dans nos autres agences.</p>
      </div>

      <div className="grid text-white-100 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Image
        src="/MPLoc_transparent.png"
        alt="Logo MPLoc"
        width={200}
        height={12}
        />
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Informations{" "}
            <li>
              <ul>Accueil</ul>
              <ul>Nos agences</ul>
              <li>Locations matériaux
                <ul>Gros matériel</ul>
                <ul>Petit matériel</ul>
                <ul>Matériel spécifique</ul>
                <ul>Matériel benne</ul>
              </li>
              <ul>Contact</ul>
            </li>
          </h2>

          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{" "}
            <li>
              <ul>Agence de Muret:</ul>
              <ul>Lorem</ul>
              <ul>Agence de Carères:</ul>
              <ul>Lorem</ul>
              <ul>Agence Autérive</ul>
              <ul>Lorem</ul>
              <ul>Tél: 05 34 51 57 91</ul>
              <ul>Mail: loremipsum@lorem.com</ul>
            </li>
          </h2>

          <h2 className={`mb-3 text-2xl font-semibold`}>
            Informations{" "}
            <Image
              src="/Logo_editions_corses.png"
              alt="logo editions corses"
              className=""
              width={150}
              height={12}
              priority
            />
            © 2024 - Les éditions corses
            Pexels
            Mentions légales
          </h2>
      </div>
    </main>
  );
}
