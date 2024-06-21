import Image from "next/image";
import Header from "@/app/components/Header";
import { FormControl, FormLabel, InputAdornment, RadioGroup, TextField, FormControlLabel, Radio } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Page() {
    return (
        <div>
            <div>

            <p className="text-gray-300 --tw-text-opacity: 0.3 text-9xl ">CAMION BENNE</p>
                    <Image 
                        src="/dumptruck_white.png"
                        alt="MPLoc Logo"
                        className=""
                        width={750}
                        height={320}
                        priority
                    />
                    <span>

                        <p>A partir de 250€/jour</p>
                        <h2>
                            <p>Camion benne</p>
                            <p>simple cabine</p>
                        </h2>
                            <p>Charge utile 1,1 t.</p>
                            <p>Ref. 0000000</p>
                    </span>
            </div>

            <div>
                    <section>
                    Caractéristiques techniques
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
                    </section>
                    <section>
                    Documentation
                    <p>Lorem</p>
                    <button>TELECHARGER LE PDF</button>
                    </section>
                    <section>
                    Réserver votre engin
                    <FormControl>
                    <TextField id="standard-firstname" label="Nom" variant="standard" />
                    <TextField id="standard-lastname" label="Prénom" variant="standard" />
                    <TextField id="standard-phonenumber" label="Téléphone" variant="standard" />
                    <TextField id="standard-email" label="Email" variant="standard" />
                        <InputAdornment position="start">
                        <CalendarMonthIcon />
                        <TextField id="standard-begindate" label="Date d'emprunt" variant="standard" />
                        </InputAdornment>
                        <InputAdornment position="start">
                        <CalendarMonthIcon  />
                        <TextField id="standard-enddate" label="Date de fin" variant="standard" />
                        </InputAdornment>
                        <FormLabel id="row-radio-button-group-label">Livraison</FormLabel>
                        <RadioGroup row name="row-radio-buttons-group" aria-labelledby="row-radio-button-group-label">
                            <FormControlLabel value="oui" control={<Radio />} label="oui" />
                            <FormControlLabel value="non" control={<Radio />} label="non" />
                        </RadioGroup>
                    </FormControl>
                    </section>
            </div>    
        </div>
    )
    
}