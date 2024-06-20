import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="font-restora" >MP Loc, louer votre matériel de BTP</h1>
        <Image
          className=""
          src="/Homepage_main.png"
          alt="Main image"
          width={400}
          height={370}
          priority
        />
        <h4>Titre de référencement</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad. Sed temporibus at a error sunt dicta ratione.</p>
      </div>
      <div className="flex">
        <h2 className="text-center">Vos avantages chez MP Loc</h2>
        <Image
              src="/HomepageIcon1.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />
            <Image
              src="/HomepageIcon2.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />
            <Image
              src="/HomepageIcon3.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />
            <Image
              src="/HomepageIcon4.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />
            <Image
              src="/HomepageIcon5.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />
            <Image
              src="/HomepageIcon6.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />
      </div>

      <div>
        <h2>Nos matériel de location</h2>
        <button>05 34 51 37 91</button>
      </div>

      <div>
        <h2>Nos conseils</h2>
        <Image
              src="/Homepage_advice1.png"
              alt=""
              className=""
              width={350}
              height={12}
              priority
            />
            <h4>Un petit coup de pelle?</h4>
            <p>    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aperiam nulla facere! Harum dolores enim iusto doloribus aliquam fugiat voluptatem ex blanditiis asperiores, quas molestiae sit voluptas illum saepe! Laboriosam unde quas beatae dolorum est provident modi amet nam quam. Amet officiis, nam minus at vero rem officia ullam culpa delectus voluptates, blanditiis quasi vel libero modi optio omnis sapiente.
</p>
<p>EN SAVOIR PLUS</p>

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
