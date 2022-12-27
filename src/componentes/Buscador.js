import React, { Component } from 'react';


class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        // tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        // lo enviamos al componente principal.
        this.props.datosBusqueda(termino);
    }

    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className='row-buscador' >
                    <div className="form-group col-md-8 input-buscar">  
                        <input ref={this.busquedaRef} type="text" className='form-control form-control-lg'
                        placeholder='Busca tú producto.' />
                    </div>
                    <div className='form-group col-md-4 boton-buscar'>
                        <input type="submit" className='btn btn-lg btn-danger w-80' value="Buscar" />
                    </div>
                </div>
            </form>
        );
    };
}
 
export default Buscador;