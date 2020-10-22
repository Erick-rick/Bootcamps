import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from "./components/conversor"

function App() {
  return (
    <div className="App">
        <h1>Conversor de moedas</h1>
        <div className="Linha">
          <Conversor moeadaA="USD" moeadaB="BRL" ></Conversor>
          <Conversor moeadaA="BRL" moeadaB="USD" ></Conversor>
       </div>
       <div className="Linha">
          <Conversor moeadaA="EUR" moeadaB="EUR" ></Conversor>
          <Conversor moeadaA="BRL" moeadaB="USD" ></Conversor>
       </div>
       <div className="Linha">
          <Conversor moeadaA="USD" moeadaB="BRL" ></Conversor>
          <Conversor moeadaA="BRL" moeadaB="USD" ></Conversor>
       </div>

    </div>
  );
}

export default App;
