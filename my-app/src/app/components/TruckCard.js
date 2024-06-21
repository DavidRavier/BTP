
/*
Faire une carte avec l'image, une étiquette collée en haut avec le prix puis sur la moitié inférieure
les caractéristiques du camion avec les deux faux boutons réserver et en savoir plus
*/

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import BlueButton from './BlueButton';


export default function MediaCard() {
  return (
    // Pour pouvoir ajouter la mention "à partir de 250€ /jour, il faut rajouter le subheader qui separ placé en position absolute sur l'image"
    <Card sx={{ maxWidth: 385 }}>
        <CardHeader 
            subheader="A partir de 250€ /jour"
            sx={{ maxWidth: 1/2 }}
        />
      <CardMedia
        sx={{ height: 220 }}
        image="/Transport4.png"
        title="Camion benne simple cabine"
      />
      <CardContent>
        <Typography variant="h4" component="div">
          Camion benne simple cabine
        </Typography>
        <Typography gutterBottom component="div">
          CHARGE UTILE 1,1 T
        </Typography>
        <Typography variant="body2" color="text.secondary">Benne basculante: Oui</Typography>
        <Typography variant="body2" color="text.secondary">Nombre de places: 3</Typography>
        <Typography variant="body2" color="text.secondary">PTAC (kg): 3500</Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant='contained' fullWidth="true">Réserver</Button>
        <Button size="large" variant='text' fullWidth="true">En savoir plus</Button>
      </CardActions>
    </Card>
  );
}
