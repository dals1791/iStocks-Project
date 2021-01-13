import React from "react"
import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Stock from "./pages/Stock"
import stocks from "./stock-data"
import {Route, Switch} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Dashboard">
        <Dashboard stocks={stocks}/>
      </Route>
      <Route path="/Stocks/:symbol" render={(routerProps)=> 
      <Stock {...routerProps}/>}/>
        
      </Switch>
      
    </div>
  );
}

export default App;
