import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';





function App() {
  return ( 
    <>
      <Router> 
          <Switch>
           <Route path='/' excact component={Home} />
           <Route path='/AboutMe' component={AboutMe} />
           <Route path='/Contact' component={Contact} />
          </Switch>
      </Router>  
    </>    
  );
}

export default App;