import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About';
import Home from './Home';
function App() {
  return (
    <Router>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>  
          <About />
          </Route>                 
        </Switch> 
            
    </Router> 
  );
}


export default App;
