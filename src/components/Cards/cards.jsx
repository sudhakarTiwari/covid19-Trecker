import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({data: {confirmed, Recovered, Deaths, lastupdate}}) => {
    if(!confirmed){
        return "loading..."
    }
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}  xs = {12} md = {3} className = {cx(styles.card, styles.Infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = ","/>
                        </Typography>
                     <Typography color="textSecondary" >{new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of covid 19</Typography>
                    </CardContent>
                 </Grid>    

                 <Grid item component={Card}  xs = {12} md = {3} className = {cx(styles.card, styles.Recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {Recovered.value} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from covid 19</Typography>
                    </CardContent>
                 </Grid>    

                 <Grid item component={Card}  xs = {12} md = {3} className = {cx(styles.card, styles.Deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {Deaths.value} duration = {2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths from covid 19</Typography>
                    </CardContent>
                 </Grid>    
            </Grid>
        </div>
    )
}

export default Cards