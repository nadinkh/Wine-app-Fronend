import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import WinePair from './WinePair';
import PairRec from './PairRec';
import { Link } from 'react-router-dom';
import HomePage from '../HomePage-logged-out/HomePage';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "2rem",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "whitesmoke",
        backgroundColor: "#722F37",
        fontSize: "2rem",
        fontWeight: "400"
    },
}));


const Pairing = () => {
    const classes = useStyles();
    const [showWine, setShowWine] = useState(false)
    const [showFood, setShowFood] = useState(false)

    const handleShowWine = () => {
        setShowFood(false);
        setShowWine(true);
    }
    const handleShowFood = () => {
        setShowFood(true);
        setShowWine(false);
    }

    return (
      <Container className={classes.root}>
        <Link to="/"><button className={classes.paper}>Go home</button></Link>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={7}
        >
          <Grid item>
            <Paper className={classes.paper} onClick={handleShowWine}>
              Wine Pairing
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} onClick={handleShowFood}>
              Food Pairing
            </Paper>
          </Grid>
        </Grid>
        {showWine && <WinePair />}
        {showFood && <PairRec />}
      </Container>
    );
}

export default Pairing;