import LandingPage from './pages/LandingPage';
import {Route} from 'react-router-dom'
import ProfileSection from './pages/ProfileSection';
import PastOrders from './components/PastOrders';
import NavAppBar from './components/Navbar';
import FooterGrid from './components/Footer';
import  Container  from '@material-ui/core/Container';
import  Typography  from '@material-ui/core/Typography';
import AllRestaurants from './pages/AllRestaurants';
import RecipeReviewCard from './card';
import Restaurant from './pages/Restuarant';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">

      {/* ANKITA */}

      {/*   <LandingPage></LandingPage> */}
       {/*  <AllRestaurants></AllRestaurants>  */}
        {/* <ProfileSection></ProfileSection> */}  
        {/* <NavAppBar></NavAppBar> */}
       {/*  <RecipeReviewCard></RecipeReviewCard> */}
      {/* <FooterGrid fixed></FooterGrid> */}

      {/* URVASHI */}
            
{/* <Restaurant />  */}
      {/* <OrderSummary /> */}
       {/*   <Cart></Cart> */}
      {/* <DrawerExample></DrawerExample> */}
      
      {/* ROUTES  */}
      <Route path='/allrestaurants/:id' exact component={Restaurant}></Route>
      <Route path='/allrestaurants' exact component={AllRestaurants}></Route>
      <Route path='/profile' exact component={ProfileSection}></Route>
      <Route path='/cart' exact component={Cart}></Route>
      <Route path='/' exact component={LandingPage}></Route>
    </div>
  );
}

export default App;