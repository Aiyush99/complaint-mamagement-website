import React,{useState} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"; 
import './App.css';
import Register from "./components/Register"
import Login from "./components/Login"



function App() {

 
  return (
   <Router>
     <Switch>
       <Route exact path = "/"component={Register}/>
       <Route exact path = "/login"component={Login}/>

     </Switch>
   </Router>
  );
}

export default App;
