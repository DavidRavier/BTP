import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhiteButton from "./components/WhiteButton";
import BlueButton from "./components/BlueButton";
import { Button, Divider } from "@mui/material";
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

        <h2 className="text-dark font-restora text-left mb-12 mt-16 text-4xl">Nos conseils</h2>
      <section className="flex">
        <span className="flex-col">
        <button className="bg-secondary px-4 mr-6 mb-8">05 34 51 57 91</button>
          <button className="bg-primary px-4 mb-8">Réserver</button>
          <Image 
            src="/Homepage_advice1.png"
              alt=""
              className="flex mb-4"
              width={350}
              height={12}
          />
          <h4 className="text-dark font-restora text-xl mb-4">Un petit coup de pelle?</h4>
            <p className="text-dark font-restora text-sm max-w-sm mb-4">    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aperiam nulla facere! Harum dolores enim iusto doloribus aliquam fugiat voluptatem ex blanditiis asperiores, quas molestiae sit voluptas illum saepe! Laboriosam unde quas beatae dolorum est provident modi amet nam quam. Amet officiis, nam minus at vero rem officia ullam culpa delectus voluptates, blanditiis quasi vel libero modi optio omnis sapiente.</p>
        </span>
            <Image
              src="/Homepage_advice2.png"
              alt="travailleurs souriant"
              className=""
              width={400}
              height={12}
            />
      </section>
            <Button variant="text" disableElevation className="text-dark font-restora text-sm">EN SAVOIR PLUS</Button>

        <h2 className="text-dark font-restora text-left mb-8 mt-16 text-4xl">Vos agences MP Loc</h2>
<section className="flex">
<span className="flex-col">
        <Image
              src="/Homepage_agency1.png"
              alt=""
              className="mb-8"
              width={450}
              height={12}
            />
            <p className="text-dark font-restora text-xl max-w-sm mb-4 text-right">Titre de référencement</p>
            <p className="text-dark font-restora text-sm max-w-sm mb-4 text-right">    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aperiam nulla facere! Harum dolores enim iusto doloribus aliquam fugiat voluptatem ex blanditiis asperiores, quas molestiae sit voluptas illum saepe! Laboriosam unde quas beatae dolorum est provident modi amet nam quam. Amet officiis, nam minus at vero rem officia ullam culpa delectus voluptates, blanditiis quasi vel libero modi optio omnis sapiente.</p>
            <p className="text-dark">EN SAVOIR PLUS</p>
            <button className="bg-secondary px-4 mr-4">05 34 51 57 91</button>
            <button className="bg-primary px-4 mb-8">Réserver</button>
</span>
<span className="flex-col">
        <h3 className="text-dark font-restora text-4xl">MURET</h3>
        <p className="text-dark text-sm">Lorem ipsum dolor sit amet consectetur</p>
        <h3 className="text-dark font-restora text-4xl">CAZÈRES</h3>
        <p className="text-dark text-sm">Lorem ipsum dolor sit amet consectetur</p>
        <h3 className="text-dark font-restora text-4xl">AUTERIVE</h3>
        <p className="text-dark text-sm">Lorem ipsum dolor sit amet consectetur</p>
        <Image
              src="/Homepage_agency2.png"
              alt=""
              className=""
              width={300}
              height={12}
              priority
            />
</span>
</section>
      <div>

      
        <p>Votre agence est ouverte du lundi au vendredi de 7h à 12h et de 13h45 à 18h.</p>
        <p> Nous vous accueillons également dans nos autres agences.</p>
      </div>

      <div className="grid text-light bg-primary lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Image
        src="/MPLoc_transparent.png"
        alt="Logo MPLoc"
        className="mr-8 ml-4 my-8"
        width={200}
        height={12}
        />
          <h2 className={`my-8 text-xs py-2`}>
            Informations
            <Divider variant="middle" component="p" className="bg-light my-2"/>
              <p>Accueil</p>
              <p>Nos agences</p>
              <p>Locations matériaux</p>
                <p>Gros matériel</p>
                <p>Petit matériel</p>
                <p>Matériel spécifique</p>
                <p>Matériel benne</p>
              <p>Contact</p>
          </h2>

          <h2 className={`my-8 text-xs py-2`}>
            Contact{" "}
            <Divider variant="middle" component="p" className="bg-light my-2"/>
              <p>Agence de Muret:</p>
              <p>Lorem</p>
              <p>Agence de Carères:</p>
              <p>Lorem</p>
              <p>Agence Autérive</p>
              <p>Lorem</p>
              <p>Tél: 05 34 51 57 91</p>
              <p>Mail: loremipsum@lorem.com</p>
          </h2>

          <h2 className={`my-8 text-xs py-2`}>
            Informations{" "}
            <Divider variant="middle" component="p" className="bg-light mt-2"/>
            <Image
              src="/Logo_editions_corses.png"
              alt="logo editions corses"
              className="my-4"
              width={150}
              height={12}
              priority
            />
            <p>© 2024 - Les éditions corses</p>
            <p>Pexels</p>
            <p>Mentions légales</p>
          </h2>
      </div>
    </main>
  );
}
