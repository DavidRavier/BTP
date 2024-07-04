/*
A faire plus tard: la configuration de Tailwind peut me permettre de changer la couleur du header 
en fonction de la page d'un thème "sombre" (fond bleu et écriture blanche) à un thème clair (fond blanc écriture bleue), 
le tout grâce à une ternaire isPageLight? 
*/ 

"use client"
import * as React from 'react';
import Image from "next/image";
import { Add, Facebook, Instagram, Phone, Search } from "@mui/icons-material";
import Link from "next/link";
import { ListItemIcon } from "@mui/material";

export default function Header() {
        return (
            <>
                <div className=" flex justify-between items-center max-w-screen-lg bg-primary text-light font-restora">
                    <div>
                        <Link href="/">
                        <Image
                        src="/MPLoc_transparent.png"
                        alt="MPLoc Logo"
                        className="m-8"
                        width={140}
                        height={30}
                        />  
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/">
                        <button className="mx-2">Accueil</button>
                        </Link>
                        <Link href="/truckoverview">    
                            <button className="mx-2">Location de matériel</button>
                                <ListItemIcon>
                                    <Add fontSize="small" color="light"/>
                                </ListItemIcon>
                        </Link>
                            <button className="mx-2">Conseils</button>
                        <button className="mx-2">Galerie photos</button>
                        <Link href={"#contact"}>
                        <button className="">
                        Contact
                        <ListItemIcon>
                            <Facebook fontSize="small" color="light"/>
                            <Instagram fontSize="small" color="light"/>
                        </ListItemIcon>
                        </button>
                        </Link>
                    </div>
                    <div className='flex'>
                        <ListItemIcon>
                            <Phone fontSize="small"  color="light"/>
                        </ListItemIcon>
                    <button className="text-primary bg-light px-4">RÉSERVER</button>
                        <ListItemIcon>
                            <Search fontSize="small"  color="light"/>
                        </ListItemIcon>
                    </div>
                </div>
        </>
        );
    }; 
