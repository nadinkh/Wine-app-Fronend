import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { postData } from '../lib/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import { v4 as uuidv4 } from 'uuid';
import Chip from '@material-ui/core/Chip';

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
    chip: {
        fontSize: "1.2rem",
        fontWeight: "400",
        color: "whitesmoke",
        border: "whitesmoke"
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
    meat: {
        backgroundColor: "#f05d65",
    },
    prep: {
        backgroundColor: "#8f9292",
    },
    dairy: {
        backgroundColor: "#e0aa25",
    },
    veg: {
        backgroundColor: "#a3c239",
    },
    herb: {
        backgroundColor: "#13a89e",
    },
    starch: {
        backgroundColor: "#f09221",
    },
    sweetFood: {
        backgroundColor: "#8283b8",
    },
}));

const PairRec = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [pairing, setPairing] = useState(false)
    // const [wine, setWine] = useState('')
    const [meat, setMeat] = useState('')
    const [prep, setPrep] = useState('')
    const [dairy, setDairy] = useState('')
    const [veg, setVeg] = useState('')
    const [herb, setHerb] = useState('')
    const [starch, setStarch] = useState('')
    const [sweet, setSweet] = useState('')


    const handleWineChange = async (e) => {
        setLoading(true);
        setPairing(false);
        let wineType = {
            WineType: e.currentTarget.value
        }
        let res = await postData(wineType);
        setPairing(true);
        for (let i = 0; i < res.length; i++) {
            switch (res[i].type) {
                case "Meat":
                    setMeat(res[i].sub_type);
                    break;
                case "Preparation":
                    setPrep(res[i].sub_type);
                    break;
                case "Dairy":
                    setDairy(res[i].sub_type);
                    break;
                case "Vegetable":
                    setVeg(res[i].sub_type);
                    break;
                case "Starch":
                    setStarch(res[i].sub_type);
                    break;
                case "Herb & Spice":
                    setHerb(res[i].sub_type);
                    break;
                case "Sweet":
                    setSweet(res[i].sub_type);
                    break;
                default:
                    setPairing(true);
            }
            setLoading(false);
        }
    }

    return (
        <Container className="wine-pair-container" >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={6} container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Button onClick={handleWineChange} value="Bold Red" className={classes.btn}>
                        <Paper elevation={3} className={`${classes.paper} ${classes.boldR}`} >
                            Bold Red
                </Paper>
                    </Button>
                    <Button onClick={handleWineChange} value="Medium Red" className={classes.btn}>
                        <Paper elevation={3} className={`${classes.paper} ${classes.mediumR}`}>
                            Medium Red
                </Paper>
                    </Button>
                    <Button onClick={handleWineChange} value="Light Red" className={classes.btn}>
                        <Paper elevation={3} className={`${classes.paper} ${classes.lightR}`}>
                            Light Red
                </Paper>
                    </Button>
                    <Button onClick={handleWineChange} value="Rosé" className={classes.btn}>
                        <Paper elevation={3} className={`${classes.paper} ${classes.rose}`}>
                            Rosé
                </Paper>
                    </Button>
                    <Button onClick={handleWineChange} value="Rich White" className={classes.btn}>
                        <Paper elevation={3} className={`${classes.paper} ${classes.richW}`} >
                            Rich White
                </Paper>
                    </Button>
                    <Button onClick={handleWineChange} value="Light White" className={classes.btn}>
                        <Paper elevation={3} className={`${classes.paper} ${classes.lightW}`}>
                            Light White
                </Paper>
                    </Button>
                    <Button onClick={handleWineChange} value="Sparkling" className={classes.btn}>
                        <Paper elevation={3} className={`${classes.paper} ${classes.spark}`}>
                            Sparkling
                </Paper>
                    </Button>
                    <Button onClick={handleWineChange} value="Sweet White" className={classes.btn}>
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
                <Grid item xs={12} sm={6} container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    {loading ? <div className="loader">
                        <CircularProgress color="secondary" />
                    </div> : ""}
                    {pairing && <div className="wine-pair-results">
                        {meat && <Paper elevation={3} className={`${classes.paper} ${classes.meat}`}>
                            <h4>Meat</h4>
                            {meat.map((item) => {
                                return (<Chip className={`${classes.chip}`} key={uuidv4()} label={item} variant="outlined" />)
                            })}
                        </Paper>}
                        {prep && <Paper elevation={3} className={`${classes.paper} ${classes.prep}`}>
                            <h4>Preparation</h4>
                            {prep.map((item) => {
                                return (<Chip className={`${classes.chip}`} key={uuidv4()} label={item} variant="outlined" />)
                            })}
                        </Paper>}
                        {dairy && <Paper elevation={3} className={`${classes.paper} ${classes.dairy}`}>
                            <h4>Dairy</h4>
                            {dairy.map((item) => {
                                return (<Chip className={`${classes.chip}`} key={uuidv4()} label={item} variant="outlined" />)
                            })}
                        </Paper>}
                        {veg && <Paper elevation={3} className={`${classes.paper} ${classes.veg}`}>
                            <h4>Vegetables</h4>
                            {veg.map((item) => {
                                return (<Chip className={`${classes.chip}`} key={uuidv4()} label={item} variant="outlined" />)
                            })}
                        </Paper>}
                        {herb && <Paper elevation={3} className={`${classes.paper} ${classes.herb}`}>
                            <h4>Herbs & Spice</h4>
                            {herb.map((item) => {
                                return (<Chip className={`${classes.chip}`} key={uuidv4()} label={item} variant="outlined" />)
                            })}
                        </Paper>}
                        {starch && <Paper elevation={3} className={`${classes.paper} ${classes.starch}`}>
                            <h4>Starches</h4>
                            {starch.map((item) => {
                                return (<Chip className={`${classes.chip}`} key={uuidv4()} label={item} variant="outlined" />)
                            })}
                        </Paper>}
                        {sweet && <Paper elevation={3} className={`${classes.paper} ${classes.sweetFood}`}>
                            <h4>Sweets</h4>
                            {sweet.map((item) => {
                                return (<Chip className={`${classes.chip}`} key={uuidv4()} label={item} variant="outlined" />)
                            })}
                        </Paper>}
                    </div>}
                </Grid>
            </Grid>
        </Container>
    )
}
export default PairRec;