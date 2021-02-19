import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Box, Checkbox } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../components/SearchBar";
import RestaurantItems from "../components/RestaurantItems";
import foodData from "../data/FoodData";
import NavAppBar from "../components/Navbar";
import FooterGrid from "../components/Footer";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 12,
    width: "100%",
  },
  restBack: {
   // marginTop: "3%",
    height: "auto",
    width: "100%",
    backgroundColor: "rgb(233,236,238)",
  },
  imgContainer: {
    //marginTop: "20px",
    width: "80%",
    height: "100%",
    marginLeft: "3%",
    marginBottom: "12%",
  },
  control: {
    padding: theme.spacing(),
  },
  img: {
    width: "100%",
    height: "100%",
    marginLeft: "3%",
    marginBottom: "2%",
  },
  restDetails: {
    marginLeft: "70px",
  },
  Typography: {
    fontSize: "12px",
  },
  random: {
    width: "200px",
    //  border: '1px solid white',
    height: "200px",
  } /*
  Grid: {
    backgroundColor: "rgb(23,26,41)",
  }, */,
}));

const Restaurant = ({ match }) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [vegChecked, setvegChecked] = useState(false);

  const data = foodData();

  useEffect(async () => {
    await setItems(data);
  }, []);

  // console.log(items);

  //filter based on  search
  const handleSearch = (value) => {
    let filteredItems = items.filter((search) => {
      return (
        search.description.toLowerCase().includes(value) ||
        search.title.toLowerCase().includes(value)
      );
    });

    if (vegChecked === true && value !== "") {
      let filteredItemsVeg = items.filter((search) => {
        return (
          (search.type === "veg" &&
            search.description.toLowerCase().includes(value)) ||
          search.title.toLowerCase().includes(value)
        );
      });
      console.log("filteredItemsVeg", filteredItemsVeg);
      setItems(filteredItemsVeg);
    } else if (value !== "") {
      setItems(filteredItems);
    } else setItems(data);
  };

  //filter based on veg-only..
  const handleChange = (event) => {
    alert()
    if (vegChecked === true) {
      setvegChecked(false);
      setItems(data);
    } else {
      setvegChecked(true);

      let filter = data.filter((d) => d.type === event.target.value);
      console.log("veg data", filter);
      console.log(event.target.value);
      setItems(filter);

      console.log("filter [0] - ", filter);
    }
  };

  // console.log(foodData());
  return (
    <>
      {/* Navbar */}
    <NavAppBar></NavAppBar>

      <div className={classes.restBack} component="span" mt={5} ml={5}>
        <Grid container item className={classes.root}>
          <Grid container item xs={12} s={12} md={4} lg={3}>
            <Box className={classes.imgContainer}>
              <img
                className={classes.img}
                alt=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tsoiupshc86py6uz2spo"
              />
            </Box>
          </Grid>
          <Grid item xs={12} s={12} md={8} lg={9} style={{ marginTop: 40 }}>
            <div className={classes.restDetails}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                style={{ fontStyle: "bolder" }}
              >
                Id is : {match.params.id}
                <br />
                The Bean Box
              </Typography>
              <Typography
                variant="body2"
                color="rgb(234,255,255)"
                component="subtitle"
              >
                Punjabi, Chinese, NorthIndian
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Costs Rs.200 for one
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Minimum order Rs.1000
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Anything
              </Typography>
              <br />
              <Typography variant="body2" color="textPrimary">
                <b>Address</b>: Navrangpura, Navrangpura
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Call: +91 9198765423
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Dine-In Timing: 1pm to 12am
              </Typography>
            </div>
          </Grid>

          {/*  <Grid item xs={false} sm={1} />  */}
        </Grid>

        {/* below Restuarent detail!1 */}
      </div>
      <Container>
        <Grid container direction="row" style={{ marginTop: 40 }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={3}
            md={3}
            style={{ marginTop: 20, marginLeft: "80", paddingLeft: 10 }}
          >
            <SearchBar page="items" handleSearch={handleSearch} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            style={{
              paddingLeft: "50px",
            }}
            lg={6}
            md={6}
          >
            <Typography
              gutterBottom
              variant="h5"
              noWrap
              style={{ textAlign: "center" }}
            >
              Why starve when you have us&nbsp;&nbsp;
              <span role="img" aria-label="fries" style={{ fontSize: 40 }}>
                🍟
              </span>
            </Typography>
            <Typography variant="body1" noWrap style={{ textAlign: "center" }}>
              Order from wide varieties of different available Items below
            </Typography>
            <br />
          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            lg={3}
            md={3}
            style={{
              marginTop: 20,
              marginLeft: "80",
              paddingLeft: 10,
              float: "right",
            }}
          >
            <Checkbox
              checked={vegChecked}
              value="veg"
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Veg Only
          </Grid>
        </Grid>
      </Container>
      {/* <Grid
          item
          xs={12}
          sm={4}
          lg={4}
          style={{ marginTop: 20, marginLeft: "20", paddingLeft: 10 }}
        >
          <SearchBar page="items" handleSearch={handleSearch} />
        </Grid>
 */}

      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        //style={{ marginTop: 20, marginLeft: "20", paddingLeft: 10 }}
      >
        <RestaurantItems items={items} />
      </Grid>
      <FooterGrid />
    </>
  );
};
export default Restaurant;
