import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { shadows } from '@material-ui/system';
import  Avatar  from '@material-ui/core/Avatar';
import UsersData from '../data/users';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles(theme => ({
  root: {
    //   margin: '2%',
    padding: "3%",

   // backgroundColor: "#37718e",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    // border: "1px solid #171a29",
    color: "#171a29",
    height: "90vh",
    width: "",
    backgroundColor: "#ffffff",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },

  formfields:{
    color: '#171a29',
    // backgroundColor: 'white'
  },
  avatarImage:{
    fontSize:'20%',
    width: '10vw',
    height: '20vh',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  details:{
    
    fontSize: '25px',
    padding: '3%',
    // margin: '2%',
    textAlign: 'center',
    marginTop: '5%',
    color: '#37718e'
  },
  detailedText:{
    padding: '3%'
  },
  fields:{
    fontSize: '20px',
    color: 'grey'
  },
  editicon:{
    display: 'flex',
    cursor: 'pointer'
  },
  edit:{
    fontSize: '35px',
    color: '#37718e'
    
  }

}));

export default function MyProfile() {


  const isAvatarSmallDevices = useMediaQuery({
    query: '(min-device-width: 500px)'
  })













  const classes = useStyles();
  const users = UsersData();
  // console.log(users[0].firstName);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12} lg={12} md={4}>
            <Paper className={classes.paper}>
           
            <div className={classes.editicon}>
         {isAvatarSmallDevices && <Avatar alt="Remy Sharp" variant="MuiAvatar-rounded" className={classes.avatarImage} src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" /> } 

            <EditIcon className={classes.edit} onClick={handleClickOpen}/>
            
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title">Edit Details</DialogTitle>


                  <DialogContent>
                    
                    <TextField
                      autoFocus
                      margin="dense"
                      id="fname"
                      label="First Name"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="lname"
                      label="Last Name"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="email"
                      label="Email Id"
                      type="email"
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Mobile Number"
                      type="text"
                      fullWidth
                    />

                  </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
            
            
            
            
              <div className={classes.details}>
                  <div className={classes.detailedText}> 
                    <div>Name</div>
                    <div className={classes.fields}>{users[0].firstName} {users[0].lastName}</div>
                  </div>

                  <div className={classes.detailedText}>

                  <div>Email Id</div>
                      <div className={classes.fields}>{users[0].email}</div>
                  </div>

                 <div className={classes.detailedText}>
                      <div>Mobile Number</div>
                      <div className={classes.fields}>{users[0].mobileNumber}</div>
                 </div>
               
              </div>

            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
