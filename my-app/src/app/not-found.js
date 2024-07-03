import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return(
        <div className="text-dark text-center">
            <h2>Page non trouvée</h2>
            <p>La page que vous demandez n`existe pas</p>
            <Link href="/">
            <Image
            src="/MPLoc.png"
            alt="logo MPLoc"
            width={200}
            height={200}
            className="mx-auto"
            />
            </Link>
            <p>Cliquez sur le logo pour revenir à l`accueil</p>

        </div>
    );
}