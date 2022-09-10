import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Colaborador from './components/Colaborador/Colaborador';
import { useState } from 'react';

function App() {
  const [buscastr, setBuscastr] = useState(""); // uso hook: useState, variable buscastr, se inicializa con funcion setBuscastr.
  console.log(buscastr);
  return (
    <div className="App">
      <Header setBuscastr={setBuscastr}/> 
      <Colaborador buscastr={buscastr} />
      <Footer />
    </div>
  );
}

export default App;
