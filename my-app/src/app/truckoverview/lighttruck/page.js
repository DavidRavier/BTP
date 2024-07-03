'use client'

import Image from "next/image";
import { FormControl, FormLabel, InputAdornment, RadioGroup, TextField, FormControlLabel, Radio, Grid, ListItemIcon } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Footer from "@/app/components/Footer";
import { East, West } from "@mui/icons-material";
import WhiteTruckCard from "@/app/components/WhiteTruckCard";
import LightHeader from "@/app/components/LightHeader";


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
                        <div className="flex-col items-end">
                        <p>A partir de 250€/jour</p>
                        <h2>
                            <p>Camion benne</p>
                            <p>simple cabine</p>
                        </h2>
                            <p>Charge utile 1,1 t.</p>
                            <p>Ref. 0000000</p>
                        </div>
                    </span>
            </div>

            <div className="grid grid-cols-3">
                    <section className="bg-lightGray text-primary  mt-8 mr-2 mb-12">
                    <p className="text-light text-6xl relative top-12 left-12">01</p>
                    <h3 className="text-center mt-4 mb-8">CARACTÉRISTIQUES TECHNIQUES</h3>
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
                    <h3 className="text-center mt-4 mb-8">DOCUMENTATION</h3>
                    <p className="text-xs text-center mx-4 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur temporibus accusantium obcaecati voluptatem nesciunt minima ad.</p>
                    <button className="bg-light mx-12 px-4 my-2 text-center">TELECHARGER LE PDF</button>
                    </section>

                    <section className="bg-primary text-light mt-8 ml-2 mb-12">
                    <p className="text-darkGray text-6xl relative top-12 left-12">03</p>
                    <h3 className="text-center mt-4 mb-8">RÉSERVER VOTRE ENGIN</h3>
                    <div className="grid grid-cols-2">
                    <FormControl className="">
                    <TextField variant="standard" id="name" label="Nom" size="small"/>
                    <TextField variant="standard" id="lastname" label="Prénom" size="small" />
                    <TextField variant="standard" id="phone" label="Téléphone" size="small"/>
                    <TextField variant="standard" id="mail" label="Adresse mail" size="small"/>
                        <FormLabel className="text-xs text-darkGray">Date de début</FormLabel>
                        <FormLabel className="text-xs text-darkGray">Date de fin</FormLabel>
                        <FormLabel id="delivery">Livraison</FormLabel>
                        <RadioGroup row aria-labelledby="delivery" name="delivery-button">
                        <FormControlLabel value="oui" label="oui" control={<Radio />}/>
                        <FormControlLabel value="non" label="non" control={<Radio />}/>
                        </RadioGroup>
                    </FormControl>
                    </div>
                    </section>
            </div>
            <div className="flex mx-6">
            <p className="text-dark text-4xl max-w-60 ml-18">Nos engins de la même gamme</p>
            <ListItemIcon>
                <West />
                <East />
            </ListItemIcon>
            <WhiteTruckCard />
            <WhiteTruckCard />
            </div>
            <Footer />  
        </div>
    )
    
}
