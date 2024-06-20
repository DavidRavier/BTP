import Image from "next/image";
import Divider from "@mui/material/Divider";

export default function Footer() {
    return (
        <div className="grid-cols-4">
            <Image
            src="/MPLoc_transparent.png"
            alt="Logo MPLoc"
            width={200}
            height={12}
            />
            <li>
                <li>Informations</li>
                    <ul>Accueil</ul>
                    <ul>Nos agences</ul>
                    <ul>Locations matériaux</ul>
                    <ul>Contact</ul>
                <li>Contact</li>
                    <ul>Agence de Muret:</ul>
                    <ul>Lorem</ul>
                    <ul>Agence de Carères:</ul>
                    <ul>Lorem</ul>
                    <ul>Agence d'Autérive</ul>
                    <ul>Lorem</ul>
                    <ul>Tél: 05 34 51 57 91</ul>
                    <ul>Mail: loremipsum@lorem.com</ul>
                <li>Informations</li>
            </li>
        </div>
    )
}

/*

<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
<h2 className={`mb-3 text-2xl font-semibold`}>
Informations{" "}
<li>
<ul>Accueil</ul>
<ul>Nos agences</ul>
<ul>Locations matériaux</ul>
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
<ul>Agence d'Autérive</ul>
<ul>Lorem</ul>
<ul>Tél: 05 34 51 57 91</ul>
<ul>Mail: loremipsum@lorem.com</ul>
</li>
</h2>

<h2 className={`mb-3 text-2xl font-semibold`}>
Informations{" "}
</h2>
</div>
*/