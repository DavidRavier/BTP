import Image from "next/image";
import BlueButton from "./BlueButton";


export default function Agency() {
    return (
        <>
<h2 className="text-dark font-restora text-left mb-8 ml-20 mt-16 text-4xl">Vos agences MP Loc</h2>
<section className="flex justify-around text-dark font-restora">
<span className="flex-col">
        <Image
              src="/Homepage_agency1.png"
              alt=""
              className="mb-16"
              width={450}
              height={12}
            />
            <p className="text-xl max-w-sm mb-4 text-left">TITRE DE RÉFÉRENCEMENT</p>
            <p className="text-sm max-w-sm mb-4 text-left">    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aperiam nulla facere! Harum dolores enim iusto doloribus aliquam fugiat voluptatem ex blanditiis asperiores, quas molestiae sit voluptas illum saepe! Laboriosam unde quas beatae dolorum est provident modi amet nam quam. Amet officiis, nam minus at vero rem officia ullam culpa delectus voluptates, blanditiis quasi vel libero modi optio omnis sapiente.</p>
            <p className="mb-4">EN SAVOIR PLUS</p>
            <button className="bg-secondary text-light px-4 mr-4">05 34 51 57 91</button>
            <BlueButton />
</span>
<span className="flex-col">
        <h3 className="text-4xl">MURET</h3>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur</p>
        <h3 className="text-4xl">CAZÈRES</h3>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur</p>
        <h3 className="text-4xl">AUTERIVE</h3>
        <p className="text-sm mb-16">Lorem ipsum dolor sit amet consectetur</p>
        <Image
              src="/Homepage_agency2.png"
              alt="ouvrier sur chantier"
              className="mb-32"
              width={300}
              height={12}
              priority
            />
</span>
</section>
        </>
    )
}

