import React from 'react';
import './Styles/Principal.css'
import Header from './Components/header'
import Slider from './Components/slider'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);


function App() {
  
  return (

      <Router >
      <div className="containerPrincipal">
            <Link to="/">Inicio</Link>
            <Link to="/home">Home</Link>
          <Route exact path="/" render={props =>
            <div>
              <Header />
              <Slider />
            </div>
          } />
          <Route exact path="/home" component={Home} />
          
      </div>
      </Router>


  );
}

export default App;
