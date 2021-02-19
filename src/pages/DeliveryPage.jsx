import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  paper: {
    width: "auto",
    height: "auto",

    padding: "2vw",
  },
  orderBackground: {
  
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  
    padding: "20px",
    
  },
  table: {
    minWidth: 650,
    padding: "10%",
  },
  sectionGrid: {
    margin: "20px",
  },
  centralBorder: {
    borderBottom: "2px solid #171A29",
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const DeliveryPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg" >
        <Grid className={classes.orderBackground}>
          <Grid item container lg={6} md={6} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <Grid item conatiner lg={6} md={6} sm={12} xs={12}>
                <Typography variant="h4">
                  Order Id: <b>#2876428712</b>
                </Typography>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <Grid item lg={12}>
                Your order has been placed successfully!
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <div className={classes.centralBorder}></div>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />{" "}
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <Grid item container lg={12} md={12} sm={12} xs={12}>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Food Item</b>
                        </TableCell>

                        <TableCell align="right">
                          <b>Quantity</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>

                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <div className={classes.centralBorder}></div>
              <Grid container justify="flex-end" style={{ marginTop: "20px" }}>
                <Typography variant="h6">Total Amount : 2500</Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
          </Container>
      </div>
    </>
  );
};
export default DeliveryPage;