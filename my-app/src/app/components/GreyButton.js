import { Button, ListItemIcon } from "@mui/material";
import { Phone } from "@mui/icons-material";


export default function BlueButton() {
    return(
        <Button className="bg-secondary text-light">
        <ListItemIcon>
            <Phone fontSize="small" color="white"/>
        </ListItemIcon>
        05 34 51 57 91</Button>
    );
}

