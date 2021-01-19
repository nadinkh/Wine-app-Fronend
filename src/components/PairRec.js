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
                    <Paper elevation={3} className={classes.paper} >
                        Bold Red
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="medium red" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper}>
                        Medium Red
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="light red" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper}>
                        Light Red
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="rose" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper}>
                        Rose
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="rich white" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper} >
                        Rich White
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="light white" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper}>
                        Light White
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="sparkling" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper}>
                        Sparkling
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="sweet white" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper}>
                        Sweet White
                </Paper>
                </Button>
                <Button onClick={handleWineChange} value="dessert" className={classes.btn}>
                    <Paper elevation={3} className={classes.paper}>
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