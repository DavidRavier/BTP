/*
La configuration de Tailwind fait changer la couleur du header en fonction de la page 
d'un thème "sombre" (fond bleu et écriture blanche) à un thème clair (fond blanc écriture bleue)
*/ 

function Header() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Image
              src="/MPLoc_transparent.png"
              alt="MPLoc Logo"
              className=""
              width={100}
              height={24}
              priority
            />
    );
}; 

export default Header();



