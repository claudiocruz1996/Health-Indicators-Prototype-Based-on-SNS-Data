import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { teal, grey } from '@material-ui/core/colors';
import Image from "material-ui-image";
import logo from '../../assets/mds_logo_cor.png';
import bg from '../../assets/background.png';
import Box from "@material-ui/core/Box";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    descriptionCard: {
        background: 'url(' + bg + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '93vh',
        width: '100%',
        display: 'flex',
    },


}));
export default function Home() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.descriptionCard}></div>
            </div>
        </>
    )
}
