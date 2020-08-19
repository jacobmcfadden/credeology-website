import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import ReturnSection from './components/ReturnSection';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <ReturnSection/>
      <Footer/>
    </div>
  );
}

export default App;
