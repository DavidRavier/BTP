/*
A faire plus tard: trouver comment mettre un slider horizontal avec un scroll (sûrement avec
un overflow-x ) puis les connecter à East et West icon avec un EvenListener pour faire bouger 
les cards en conséquences.  

Par souci de rapidité, le formulaire a été remplacé par des phrases pour créer un sembalnt d'illusion. 
Avec plus de temps, poursuivre les techniques de form qui ont été mises en commentaire et voir celle qui est la plus adaptée.
*/

'use client'

import Image from "next/image";
import { FormControl, FormLabel, InputAdornment, TextField, FormControlLabel, Grid, ListItemIcon } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Footer from "@/app/components/Footer";
import { East, West } from "@mui/icons-material";
import WhiteTruckCard from "@/app/components/WhiteTruckCard";
import LightHeader from "@/app/components/LightHeader";
import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';



export default function Page() {
    return (
        <div className="max-w-screen-lg font-restora">
            <div>
            <LightHeader  />            
            <p className=" absolute text-secondary text-9xl text-opacity-20 ml-16">CAMION BENNE</p>
                    <span className="flex text-dark">
                    <Image 
                        src="/dumptruck_white.png"
                        alt="MPLoc Logo"
                        className=" ml-12 mt-12 "
                        width={750}
                        height={320}
                        priority
                    />
                        <div className="flex-col place-content-end">
                        <p className="mb-4">A partir de 250€/jour</p>
                        <h2>
                            <p>Camion benne</p>
                            <p className="mb-2">simple cabine</p>
                        </h2>
                            <p>Charge utile 1,1 t.</p>
                            <p>Ref. 0000000</p>
                        </div>
                    </span>
            </div>

            <div className="grid grid-cols-3">
                    <section className="bg-lightGray text-primary  mt-8 mr-2 mb-12">
                    <p className="text-light text-6xl relative top-12 left-12">01</p>
                    <h3 className="text-center mt-4 mb-8 relative">CARACTÉRISTIQUES TECHNIQUES</h3>
                    <div className="grid text-xs grid-cols-2 mb-8 mx-4">
                    <p>Hauteur: 2,22m</p>
                    <p>Longueur: 6,03m</p>
                    <p>Largeur: 2,12m</p>
                    <p>Largeur de la benne: 2m</p>
                    <p>Longueur de la benne: 3,60m</p>
                    <p>Poids: 2 890 kg</p>
                    <p> Benne basculante: Oui</p>
                    <p>Nombre de places: 3</p>
                    <p>PTAC: 3 500 kg</p>
                    <p>Moteur: électrique</p>
                    <p>Permis utilisé: Permis B</p>
                    <p>Coffre à outils: Non</p>
                    </div>
                    </section>

                    <section className="bg-lightGray text-primary mt-8 mx-2 mb-12">
                    <p className="text-light text-6xl relative top-12 left-20">02</p>
                    <h3 className="text-center relative mt-4 mb-8">DOCUMENTATION</h3>
                    <p className="text-xs text-center mx-4 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad.</p>
                    <button className="bg-light mx-12 px-4 my-2 text-center">TELECHARGER LE PDF</button>
                    </section>

                    <section className="bg-primary text-light mt-8 ml-2 mb-12">
                    <p className="text-darkGray text-6xl relative top-12 left-12">03</p>
                    <h3 className="text-center relative mt-4 mb-8">RÉSERVER VOTRE ENGIN</h3>
                    <div className="grid grid-cols-2 text-xs underline text-light">
                    <p>Nom</p>
                    <p>Prénom</p>
                    <p>Téléphone</p>
                    <p>Email</p>
                    <p>Date d`emprunt</p>
                    <p>Date de fin</p>
                    <p>Livraison</p>
                    <button className="bg-light text-primary px-4 no-underline">DEMANDE DE DEVIS</button>
{/*     
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Textarea name="lastname" placeholder="Nom" variant="plain" size="sm" color="neutral" disabled />
      <Textarea name="firstname" placeholder="Prénom" variant="plain" size="sm" color="neutral" disabled />
      <Textarea name="tel" placeholder="Téléphone" variant="plain" size="sm" color="neutral" disabled />
      <Textarea name="email" placeholder="Email" variant="plain" size="sm" color="neutral" disabled />
      <RadioGroup>
        <Radio variant="outlined" size="sm" color="neutral" label="oui" value="oui" orientation="horizontal"/>
        <Radio variant="outlined" size="sm" color="neutral" label="non" value="non" orientation="horizontal"/>
      </RadioGroup>
    </Box>
 */}

                    {/* <form className="text-xs mb-8 mx-4">
                        <label><input type="text" id="lastname" placeholder="Nom" /></label>
                        <label><input type="text" id="firstname" placeholder="Prénom" /></label>
                        <label><input type="tel" id="tel" placeholder="Téléphone" /></label>
                        <label><input type="email" id="email" placeholder="Email"/></label>
                        <label><input type="date" id="eventbeginning" placeholder="Date d'emprunt" /></label>
                        <label><input type="date" id="eventending" placeholder="Date de fin" /></label>
                        <label>Livraison
                        <input type="radio" id="oui" value="oui" />
                        <input type="radio" id="non" value="non" />
                        </label>
                        <button type="submit" className="bg-light text-primary px-4 text-xs">DEMANDE DE DEVIS</button>
                    </form> */}
                    {/* <FormControl className="">
                    <TextField variant="standard" id="name" label="Nom" size="small"/>
                    <TextField variant="standard" id="lastname" label="Prénom" size="small" />
                    <TextField variant="standard" id="phone" label="Téléphone" size="small"/>
                    <TextField variant="standard" id="mail" label="Adresse mail" size="small"/>
                    <TextField variant="standard" id="beginningdate" label="Date d'emprunt" size="small"/>
                    <TextField variant="standard" id="endingdate" label="Date de fin" size="small"/>
                        <FormLabel id="delivery">Livraison</FormLabel>
                        <RadioGroup row aria-labelledby="delivery" name="delivery-button">
                        <FormControlLabel value="oui" label="oui" control={<Radio />}/>
                        <FormControlLabel value="non" label="non" control={<Radio />}/>
                        </RadioGroup>
                    </FormControl> */}
                    </div>
                    </section>
            </div>
            <div className="flex mx-6">
            <p className="text-dark text-4xl max-w-60 ml-18">Nos engins de la même gamme</p>
            <ListItemIcon>
                <West />
                <East />
            </ListItemIcon>
            <div className="grid grid-cols-2 gap-8">
            <WhiteTruckCard />
            <WhiteTruckCard />
            </div>
            </div>
            <Footer />  
        </div>
    )
    
}


