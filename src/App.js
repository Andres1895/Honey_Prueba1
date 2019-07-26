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
      <div>       
          <Router className="routerComponent" >
            <div>
                <div>
                    <Link to="/">Inicio</Link>
                    <Link to="/home">Home</Link>
                </div>
                <div>
                    <Route exact path="/" render={props =>
                      <div  class="ho">
                          <Header />
                          <Slider />
                      </div>
                    } />
                    <Route exact path="/home" component={Home} />
                </div>
            </div>
          </Router>
      </div>
  );
}

export default App;
