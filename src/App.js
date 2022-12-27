import './App.css';
import Buscador from './componentes/Buscador';
import Resultados from './componentes/Resultado';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    // leer el state de la pagina actual
    let pagina = this.state.pagina;
    // si la pagina es 1, ya no regresar
    if (pagina === 1) return null;
    // restarle uno a la pagina actual
    pagina -= 1;
    // agregar cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    // leer el state de la pagina actual
    let pagina = this.state.pagina;
    // sumarle uno a la pagina actual
    pagina += 1;
    // agregar cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    //const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=32198510-34bfb35095049432fc0401547&q=${this.state.termino}&per_page=30&page=${pagina}`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className='column'>
        <div className="contenedor">
          <div className="jumbotron">
            <p className="m-9 lead text-center titulo">BUSCADOR DE PRODUCTOS</p>
            <Buscador
              datosBusqueda={this.datosBusqueda}
            />
          </div>
        </div>
        <div className='contenedor-resultados'>
          <Resultados
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    )
  };
}

export default App;
