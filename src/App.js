
import { useState } from 'react';
import './App.css';
import parse from "html-react-parser";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}



export default App;
