import React from 'react'
import './App.css';

import { Footer, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />

        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Footer />
      </div>

      
    </div>
  );
}

export default App;




