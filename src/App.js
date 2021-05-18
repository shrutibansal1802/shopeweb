import "./css/App.css";
import React from "react";
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart"

function App() {


  return (
    <Router>
    <div className="App">
      <nav>
        <div className="topnav">
          <div className="logo">LOGO</div>
        </div>
       
        <ul className="navbar">
          <li>
            <Link to='/'>
            <button className=' btn'> HOME</button>
            </Link>
          
          </li>
          <li>
            <Link to='/shop'>
            <button className='btn'>SHOP
            </button>
            </Link>
          </li>
          <li>
            <Link to='/cart'>
            <button className='btn'>CART
            </button>
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
