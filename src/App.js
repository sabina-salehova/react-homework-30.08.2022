import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About';
import Home from './Home';
import ForComment from './ForComment';
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
          <Route path="/ForComment" exact>
            <ForComment/>
          </Route>              
        </Switch> 
            
    </Router> 
  );
}


export default App;
