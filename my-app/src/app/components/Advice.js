import Image from "next/image";
import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";
import {East, West } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";

export default function Advice() {
    return (
        <>
<h2 className="text-dark font-restora text-justify mb-4 mt-16 ml-20">Nos conseils</h2>
      <section className="flex justify-around font-restora text-dark">
        <span className="flex-col">
        <button className="bg-secondary text-light px-4 mr-6 mb-8">05 34 51 57 91</button>
          <BlueButton />
          <Image 
            src="/Homepage_advice1.png"
              alt=""
              className="flex mb-4"
              width={350}
              height={12}
          />
          <div className="flex">
          <p className="text-xl mb-4 mr-8">UN PETIT COUP DE PELLE?</p>
          <ListItemIcon>
            <West />
            <East />
          </ListItemIcon>
          </div>
            <p className="text-sm max-w-sm mb-4">    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aperiam nulla facere! Harum dolores enim iusto doloribus aliquam fugiat voluptatem ex blanditiis asperiores, quas molestiae sit voluptas illum saepe! Laboriosam unde quas beatae dolorum est provident modi amet nam quam. Amet officiis, nam minus at vero rem officia ullam culpa delectus voluptates, blanditiis quasi vel libero modi optio omnis sapiente.</p>
        </span>
            <Image
              src="/Homepage_advice2.png"
              alt="travailleurs souriant"
              className="flex-col"
              width={400}
              height={150}
            />
      </section>
      <button className="text-dark font-restora text-left my-4 ml-20">EN SAVOIR PLUS</button>
        </>
    )
}

