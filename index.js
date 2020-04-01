import React, { Component } from 'react';
import { render } from "react-dom";
import "./style.css";
 
import React from 'react';
 
import React from 'react';
  
  class Computador extends React.Component {
    constructor (props){ 
      super(props);
      this.state = {processador: "Intel Core i5-7200u" ,memoria: "8gb", HD: "500gb", cor: "black"};
    }
  mudacomputador = () => {
    this.setState({cor: 'Pink'});
    this.setState({meoria: '32gb'});
    this.setState({processador: 'Intel Core i3-7200u'});
    this.setState({HD: '1 tb'});
  }
    render () {
      return (
      <div> 
      <h1>Exemplo com props:</h1>
      <h2> Abaixo vai aparecer as caracteristicas do meu computador:</h2> 
      <h3> Eu tenho um computador da cor: {this.props.cor }</h3> 
      <h3> A memoria do meu computador é de: {this.props.memoria}  </h3> 
      <h3> O processador do meu computador é um: {this.props.processador} </h3>
      <h3> O HD do meu computador é de: {this.props.HD} </h3>
      <h1>Exemplo com states:</h1>
      <h2> Abaixo vai aparecer as caracteristicas do meu computador:</h2> 
      <h3> Eu tenho um computador da cor: {this.state.cor }</h3> 
      <h3> A memoria do meu computador é de: {this.state.memoria}  </h3> 
      <h3> O processador do meu computador é um: {this.state.processador} </h3>
      <h3> O HD do meu computador é de: {this.state.HD} </h3>
      <button type='buton' onClick={this.mudacomputador}>Mudar Computador</button>
      </div>
      );
    }
  }
function Monitor (props) { 
  return(
    <div>
    <h2> Abaixo vai aparecer a descriçao do meu monitor: </h2> 
    <h3> As polegadas do monitor sao: {props.polegadas} </h3> 
    <h3> A marca do meu monitor é: {props.marca} </h3>
    </div>
  );
}
 
class App extends Component {
  constructor () {
    super();
    this.state ={
    name: "React", 
    propmarca : "Dell",
     proppolegadas : "13pl"
  };
}

 mudarmonitor = () => {
    this.setState({proppolegadas: '18'});
    this.setState({propmarca: 'acer'});
  }
 
 render() {
    return (
      <div>
        <Computador processador = 'Intel Core i5-5200u' memoria = '4gb' HD = '250gb' cor = 'Red'/>
        <Monitor polegadas={this.state.proppolegadas} marca={this.state.propmarca}/>
        <button type='buton' onClick={this.mudarmonitor}>Mudar Monitor</button>
      </div>
    );
  }
}
 
render (<App />, document.getElementById ("root"));