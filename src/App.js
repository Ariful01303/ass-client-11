
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route path='/'>
       <Home></Home>
     </Route>
     <Route path="/home">
      <Home></Home>
     </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
