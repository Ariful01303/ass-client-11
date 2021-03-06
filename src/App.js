
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthProvider from './components/Authcontext/AuthProvider';
import NoFound from './components/NoFound/NoFound';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/Private/PrivateRoute';
import MyOrders from './components/My Orders/MyOrders';
import AddNewService from './components/AddNewService/AddNewService';
import Booking from './components/Booking/Booking';




function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path='/'>
       <Home></Home>
     </Route>
     <Route path="/home">
      <Home></Home>
     </Route>
     <Route path="/login">
       <Login></Login>
     </Route>
     
     {/* <Route exact path="/manageorder/:idad">
       <ManageOrders></ManageOrders>
     </Route> */}
     <PrivateRoute path="/booking/:idNo">
       <MyOrders></MyOrders>
     </PrivateRoute>
    
     <Route path="/addservice">
       <AddNewService></AddNewService>
     </Route>
     <Route path="/books">
       <Booking></Booking>
     </Route>
     <Route path="/*">
       <NoFound></NoFound>
     </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    
    </div>
  );
}

export default App;
