import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        justifyContent: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const WinePair = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [meat, setMeat] = useState('')
    const [prep, setPrep] = useState('')
    const [dairy, setDairy] = useState('')
    const [veg, setVeg] = useState('')
    const [herb, setHerb] = useState('')
    const [starch, setStarch] = useState('')
    const [sweet, setSweet] = useState('')
    const [loading, setLoading] = useState(false)
    const [pairing, setPairing] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleChangeMeat = (e) => {
        setMeat(e.currentTarget.value)
    }
    const handleChangePrep = (e) => {
        setPrep(e.currentTarget.value)
    }
    const handleChangeDairy = (e) => {
        setDairy(e.currentTarget.value)
    }
    const handleChangeVeg = (e) => {
        setVeg(e.currentTarget.value)
    }
    const handleChangeHerb = (e) => {
        setHerb(e.currentTarget.value)
    }
    const handleChangeStarch = (e) => {
        setStarch(e.currentTarget.value)
    }
    const handleChangeSweet = (e) => {
        setSweet(e.currentTarget.value)
    }
    const handleWinePairSubmit = () => {
        setLoading(true);
        setPairing(false);
        let winePair = {
            meat: meat,
            prep: prep,
            dairy: dairy,
            veg: veg,
            herb: herb,
            starch: starch,
            sweet: sweet
        }
        console.log(winePair);
        setPairing(true);
        setLoading(false);
    }

    return (
        <Container className="wine-pair-container" >
            <Grid item xs={12} sm={6}>
                <div className={classes.root}>
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Meat</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {meat}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="" >
                                    None
                            </Button>
                                <Tooltip title="beef, lamb, venison" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="Red meat" >
                                        Red Meat
                            </Button>
                                </Tooltip>
                                <Tooltip title="salami, proscuitto, bacon" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="Cured meat" >
                                        Cured Meat
                            </Button>
                                </Tooltip>
                                <Tooltip title="roast, tenderloin, pork chop" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="Pork" >
                                        Pork
                            </Button>
                                </Tooltip>
                                <Tooltip title="chicken, duck, turkey" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="Poultry" >
                                        Poultry
                            </Button>
                                </Tooltip>
                                <Tooltip title="oyster, mussel, clam" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="Mollusk" >
                                        Mollusk
                            </Button>
                                </Tooltip>
                                <Tooltip title="tuna, cod, bass" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="Fish" >
                                        Fish
                            </Button>
                                </Tooltip>
                                <Tooltip title="prawn, crab, langoustine" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeMeat} value="Shellfish" >
                                        Lobster & Shellfish
                            </Button>
                                </Tooltip>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Preparation</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {prep}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangePrep} value="" >
                                    None
                            </Button>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangePrep} value="Grilled" >
                                    Grilled or Barbecued
                            </Button>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangePrep} value="Fried" >
                                    Sauteed or fried
                            </Button>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangePrep} value="Smoked" >
                                    Smoked
                            </Button>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangePrep} value="Roasted" >
                                    Roasted
                            </Button>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangePrep} value="Steamed" >
                                    Poached or Steamed
                            </Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>Dairy</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {dairy}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeDairy} value="" >
                                    None
                            </Button>
                                <Tooltip title="Brie, riccota, creme fraiche " arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeDairy} value="Soft Cheese" >
                                        Soft Cheese & Cream
                            </Button>
                                </Tooltip>
                                <Tooltip title="bleu, Gorgonzola, Stilton, Roquefort" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeDairy} value="Pungent Cheese" >
                                        Pungent Cheese
                            </Button>
                                </Tooltip>
                                <Tooltip title="cheddar, Pecorino, Asiago, Parmesan" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeDairy} value="Hard Cheese" >
                                        Hard Cheese
                            </Button>
                                </Tooltip>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Vegetables</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {veg}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="" >
                                    None
                            </Button>
                                <Tooltip title="Onions, shallot, garlic, scallion " arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="Alliums" >
                                        Alliums
                            </Button>
                                </Tooltip>
                                <Tooltip title="green bean, kale, lettuce" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="Green Vegetables" >
                                        Green Vegetables
                            </Button>
                                </Tooltip>
                                <Tooltip title="turnip, butternut, pumpkin, carrot" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="Root Vegetables" >
                                        Root Vegetables & Squash
                            </Button>
                                </Tooltip>
                                <Tooltip title="tomato, eggplant, bell peper " arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="Nightshades" >
                                        Nightshades
                            </Button>
                                </Tooltip>
                                <Tooltip title="mushrooms, maitake, chanterelle " arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="Funghi" >
                                        Funghi
                            </Button>
                                </Tooltip>
                                <Tooltip title="peanut, almond, pecan, sesame" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="Nuts" >
                                        Nuts & Seeds
                            </Button>
                                </Tooltip>
                                <Tooltip title="lentil, navy, pinto, chickpea " arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeVeg} value="Beans" >
                                        Beans & Peas
                            </Button>
                                </Tooltip>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel5"}
                        onChange={handleChange("panel5")}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Herbs & Spice</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {herb}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeHerb} value="" >
                                    None
                            </Button>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeHerb} value="Black Pepper" >
                                    Black Pepper
                            </Button>
                                <Tooltip title="chilli, aleppo, chipotle" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeHerb} value="Red Pepper" >
                                        Red Pepper
                            </Button>
                                </Tooltip>
                                <Tooltip title="hot sauce, habanero, sichuan" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeHerb} value="Hot" >
                                        Hot & Spicy
                            </Button>
                                </Tooltip>
                                <Tooltip title="thyme, oregano, basil" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeHerb} value="Herbs" >
                                        Herbs
                            </Button>
                                </Tooltip>
                                <Tooltip title="cinnamon, clove, allspice, mace " arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeHerb} value="Baking" >
                                        Baking Spices
                            </Button>
                                </Tooltip>
                                <Tooltip title="anise, tumeric, saffron, fennel, ginger" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeHerb} value="Exotic" >
                                        Exotic & Aromatic Spices
                            </Button>
                                </Tooltip>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel6"}
                        onChange={handleChange("panel6")}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Stratch</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {starch}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeStarch} value="" >
                                    None
                            </Button>
                                <Tooltip title="flour, white rice, pasta, bread " arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeStarch} value="White Starches" >
                                        White Starches
                            </Button>
                                </Tooltip>
                                <Tooltip title="quinoa, farro, brown rice" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeStarch} value="Grains" >
                                        Whole Wheat Grains
                            </Button>
                                </Tooltip>
                                <Tooltip title="sweet potato, yucca, taro" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeStarch} value="Sweet Starchy Vegetables" >
                                        Sweet Starchy Vegetables
                            </Button>
                                </Tooltip>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeStarch} value="Potato" >
                                    Potato
                            </Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel7"}
                        onChange={handleChange("panel7")}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Sweet</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {sweet}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeSweet} value="" >
                                    None
                            </Button>
                                <Tooltip title="strawberry, orange, apple, peach" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeSweet} value="Fruit" >
                                        Fruit & Berries
                            </Button>
                                </Tooltip>
                                <Tooltip title="creme brulee, ice cream" arrow>
                                    <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeSweet} value="Vanilla" >
                                        Vanilla & Caramel
                            </Button>
                                </Tooltip>
                                <Button variant="outlined" color="secondary" icon={<FaceIcon />} onClick={handleChangeSweet} value="Chocolate" >
                                    Chocolate & Coffee
                            </Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <Button variant="contained" className="btn wine-pair-submit" onClick={handleWinePairSubmit}>
                    Wine Pairing
            </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                {loading ? <div className="loader"></div> : ""}
                {pairing && <div className="wine-pair-results"></div>}
            </Grid>
        </Container>
    );
};
export default WinePair;
