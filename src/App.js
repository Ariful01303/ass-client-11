
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthProvider from './components/Authcontext/AuthProvider';
import NoFound from './components/NoFound/NoFound';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/Private/PrivateRoute';
import Services from './components/Services/Services';

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
     <PrivateRoute path="/services">
       <Services></Services>
     </PrivateRoute>
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
