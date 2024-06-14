import Image from "next/image";

export default function Page() {
    return (
        <Image
        src="/MPLoc_transparent.png"
        alt="MPLoc Logo"
        className=""
        width={100}
        height={24}
        priority
        />     
        );

        <div className="flex">
            <li>
                <ul>Accueil</ul>
                <ul>Location de matériel</ul>
                <ul>Conseils</ul>
                <ul>Galerie photos</ul>
                <ul>Contact</ul>
            </li>
        </div>
}