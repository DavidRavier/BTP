import Image from "next/image";



const icon = [
  {
  id: 0,
  imageId: "HomepageIcon1",
  text:"LARGE CHOIX D'ENGINS"
}, {
  id: 1,
  imageId: "HomepageIcon2",
  text:"ASSISTANCE 7 JOURS/7"
}, {
  id: 2,
  imageId: "HomepageIcon3",
  text:"LIVRAISON A DOMICILE"
}, {
  id: 3,
  imageId: "HomepageIcon4",
  text:"PRIX ATTRACTIFS"
}, {
  id: 4,
  imageId: "HomepageIcon5",
  text:"EQUIPE REACTIVE"
}, {
  id: 5,
  imageId: "HomepageIcon6",
  text:"CONSEILS POUR VOS TRAVAUX"
}]

const homepageicon = ({icon}) => {
  return (
    <div>
      <Image />
      <p className="text-gray-600">{icon.text}</p>
    </div>
  )
}

const HomepageIcon = () => {
    return (
        <Image
              src="/HomepageIcon1.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />,
        <Image
              src="/HomepageIcon2.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />,
        <Image
              src="/HomepageIcon3.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />,
            <Image
              src="/HomepageIcon4.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />,
            <Image
              src="/HomepageIcon5.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />,
            <Image
              src="/HomepageIcon6.png"
              alt="MPLoc Logo"
              className=""
              width={50}
              height={12}
              priority
            />        
    )   
};

export default HomepageIcon();
