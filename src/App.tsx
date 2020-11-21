import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
