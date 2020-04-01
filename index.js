import React, { Component } from 'react';
import { render } from "react-dom";
import "./style.css";
 
import React from 'react';
 
import React from 'react';
  
  class Computador extends React.Component {
    constructor (){
      this.state = {processador: "Intel Core i5-7200u" ,memoria: "8gb", HD: "500gb", cor: "black"};
    }
  
    render () {
      return (
      <div> 
      <h1> Abaixo vai aparecer as caracteristicas do meu computador:</h1> 
      <h3> Eu tenho um computador da cor: {this.state.cor }</h3> 
      <h3> A memoria do meu computador é de: {this.state.memoria}  </h3> 
      <h3> O processador do meu computador é um: {this.state.processador} </h3>
      <h3> O HD do meu computador é de: {this.state.HD} </h3>
      </div>
      );
    }
  }
function Monitor () { 
  let polegada ="30pl";
  let cor_m = "black"
  return(
    <div>
    <h1> Abaixo vai aparecer a descriçao do meu monitor: </h1> 
    <h3> As polegadas do monitor sao: {polegada} </h3> 
    <h3> A cor do meu monitor é: {cor_m} </h3>
    </div>
  );
}
 
class App extends Component {
  constructor () {
    super();
    this.state ={
    name: "React"
  };
}
 
 
 render() {
    return (
      <div>
        <Computador/>
        <Monitor/>
      </div>
    );
  }
}
 
render (<App />, document.getElementById ("root"));