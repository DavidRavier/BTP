
import * as React from 'react';
import Image from "next/image";
import { Add, Facebook, Instagram, Phone, Search } from "@mui/icons-material";
import Link from "next/link";
import { Button, ListItemIcon, Divider } from "@mui/material";

export default function LightHeader() {
        return (
            <>
                <div className=" flex justify-around items-center max-h-screen bg-light">
                    <div>
                        <Link href="/">
                        <Image
                        src="/MPLoc.png"
                        alt="MPLoc Logo"
                        className="m-8"
                        width={140}
                        height={30}
                        priority
                        />  
                        </Link>
                    </div>
                    <div>
                        <Button className="text-primary" size='small'>Accueil</Button>
                        <Link href={"#location"}>
                            
                            <Button className="text-primary" size='small'>Location de matériel</Button>
                                <ListItemIcon>
                                    <Add fontSize="small" color='primary'/>
                                </ListItemIcon>
                        </Link>
                        <Link href={"#advice"}>
                            <Button className="text-primary" size='small'>Conseils</Button>
                        </Link>
                        <Button className="text-primary" size='small'>Galerie photos</Button>
            <Link href={"#contact"}>
            <Button className="text-primary" size='small'>
            Contact
            <ListItemIcon>
                <Facebook fontSize="small" color='primary'/>
                <Instagram fontSize="small" color='primary'/>
            </ListItemIcon>
            </Button>
            </Link>
        </div>
        <div>
            <ListItemIcon>
                <Phone fontSize="small" color="primary"/>
            </ListItemIcon>
        <button className="text-light bg-primary px-4">RÉSERVER</button>
            <ListItemIcon>
                <Search fontSize="small" color="primary"/>
            </ListItemIcon>
        </div>
        <Divider className='bg-secondary' />
        </div>
        </>
        );
    }; 
