import React from 'react';
import NavAppBar from '../components/Navbar';
import FooterGrid from '../components/Footer';
import { makeStyles } from "@material-ui/core/styles";
import foodData from "../data/Restaurants";
import { fade, Grid, Card } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '2%'
    // backgroundColor: "#2c446e",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#171a29',
    height: '50vh'
  },
  
}));





export default function DeliveryPage(){
  const classes = useStyles();
  const restaurants = foodData();

  return(
    <React.Fragment>
      <NavAppBar></NavAppBar>
      <div  className={classes.root}>   
           <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item container xs={12} sm={12} md={12} lg={12} spacing={3}>

                <Grid item xs={12} sm={12} md={12} lg={5}>
                        <Paper className={classes.paper}>xs=12</Paper>
                      
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={7}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
        </Grid>
                
            
      </Grid>
      </Container>
      </div>

    <FooterGrid></FooterGrid>
    </React.Fragment>
  )
}

