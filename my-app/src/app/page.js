import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Header />
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1>MP Loc, louer votre matériel de BTP</h1>
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
      <div>
        <h2>Vos avantages chez MP Loc</h2>
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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
