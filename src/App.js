import React from 'react';
import './Styles/Principal.css'
import Header from './Components/header'
import Slider from './Components/slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);


function App() {
  return (
      <div class="containerPrincipal">
            <Header />
            <Slider/>

      </div>

  );
}

export default App;
