import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn: {
        width: "80%",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "100%",
        fontSize: "1.2rem",
        fontWeight: "500"
    },
    boldR: {
        backgroundColor: "#4b1a26"
    },
    mediumR: {
        backgroundColor: "#7e1832"
    },
    lightR: {
        backgroundColor: "#ed1d48"
    },
    rose: {
        backgroundColor: "#f1696a"
    },
    richW: {
        backgroundColor: "#fed23e"
    },
    lightW: {
        backgroundColor: "#8cc63f"
    },
    spark: {
        backgroundColor: "#55c1c3"
    },
    sweet: {
        backgroundColor: "#fbab40"
    },
    dessert: {
        backgroundColor: "#c05c28"
    },
}));

const PairRec = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [pairing, setPairing] = useState(false)
    const [wine, setWine] = useState('')

    const handleWineChange = (e) => {
        setLoading(true);
        setPairing(false);
        setWine(e.currentTarget.value);
        let wineType = {
            type: wine
        }
        console.log(wineType);
        setLoading(false);
    }

    return (
        <Container className="wine-pair-container" >
            <Grid item xs={12} sm={6} container
                direction="column"
                justify="space-evenly"
                alignItems="center">
                <Button onClick={handleWineChange} value="bold red" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.boldR}`} >
                        Bold Red
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="medium red" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.mediumR}`}>
                        Medium Red
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="light red" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.lightR}`}>
                        Light Red
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="rose" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.rose}`}>
                        Rose
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="rich white" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.richW}`} >
                        Rich White
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="light white" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.lightW}`}>
                        Light White
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="sparkling" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.spark}`}>
                        Sparkling
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="sweet white" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.sweet}`}>
                        Sweet White
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="dessert" className={classes.btn}>
                    <Paper elevation={3} className={`${classes.paper} ${classes.dessert}`}>
                        Dessert
                </Paper>
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                {loading ? <div className="loader"></div> : ""}
                {pairing && <div className="wine-pair-results"></div>}
            </Grid>
        </Container>
    )
}
export default PairRec;