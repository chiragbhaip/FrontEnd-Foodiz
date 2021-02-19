import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // backgroundColor: '#2c446e'
        marginBottom: '10%'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'black'
    },
    title: {
      flexGrow: 1,
      color: 'black'
    },
    text:{
color: 'black'
    },
    appBarTransparent:{
        backgroundColor: 'rgba(228, 229, 237,0.5)',
    },
    appBarsolid:{
        backgroundColor: 'rgba(67,129,168)'
    }
  }));


export default function NavbarDemo(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBarTransparent}>
                <Toolbar>
                    <IconButton className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography classname={classes.text} variant="h6">
            News
          </Typography>
          <Button>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}