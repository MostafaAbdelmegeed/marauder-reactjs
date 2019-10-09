import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
