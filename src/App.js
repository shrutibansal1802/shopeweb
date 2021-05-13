import "./css/App.css";
import React,{useState} from "react";
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About"

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
            <button>
              <a href="">HOME</a>
            </button>
            </Link>
          
          </li>
          <li>
            <Link to='/shop'>
            <button>
              <a href="">SHOP</a>
            </button>
            </Link>
          </li>
          <li>
            <Link to='/about'>
            <button>
              <a href="">ABOUT</a>
            </button>
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
