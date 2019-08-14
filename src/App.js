// IMPORT
import React from 'react';

// RESET CSS - DEFAULT
import './default.css';

// IMPORT HEADER
import Header from './componentes/Header';

// IMPORT BODY
import Body from './componentes/Body';

// IMPORT FOOTER
import Footer from './componentes/Footer';

//VARIBLE TO START APP
const App = () => (
  <div className="App">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
