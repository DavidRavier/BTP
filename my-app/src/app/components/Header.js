/*
La configuration de Tailwind fait changer la couleur du header en fonction de la page 
d'un thème "sombre" (fond bleu et écriture blanche) à un thème clair (fond blanc écriture bleue), le tout 
grâce à une ternaire isLight? 
*/ 

"use client"
import * as React from 'react';
import Image from "next/image";
import { Add, Facebook, Instagram, Phone, Search } from "@mui/icons-material";
import Link from "next/link";
import { Button, ListItemIcon } from "@mui/material";

export default function Header() {
        return (
            <>
                <div className=" flex justify-around items-center max-h-screen bg-primary">
                    <div>
                        <Link href="/">
                        <Image
                        src="/MPLoc_transparent.png"
                        alt="MPLoc Logo"
                        className="m-8"
                        width={140}
                        height={30}
                        priority
                        />  
                        </Link>
                    </div>
                    <div>
                        <Button className="text-light" size='small'>Accueil</Button>
                        <Link href={"#location"}>
                            
                            <Button className="text-light" size='small'>Location de matériel</Button>
                                <ListItemIcon>
                                    <Add fontSize="small" color="light"/>
                                </ListItemIcon>
                        </Link>
                        <Link href={"#advice"}>
                            <Button className="text-light" size='small'>Conseils</Button>
                        </Link>
                        <Button className="text-light" size='small'>Galerie photos</Button>
            <Link href={"#contact"}>
            <Button className="text-light" size='small'>
            Contact
            <ListItemIcon>
                <Facebook fontSize="small" color="light"/>
                <Instagram fontSize="small" color="light"/>
            </ListItemIcon>
            </Button>
            </Link>
        </div>
        <div className='flex'>
            <ListItemIcon>
                <Phone fontSize="small"  color="light"/>
            </ListItemIcon>
        <button className="text-primary bg-light mx-4">RÉSERVER</button>
            <ListItemIcon>
                <Search fontSize="small"  color="light"/>
            </ListItemIcon>
        </div>
        </div>
        </>
        );
    }; 
