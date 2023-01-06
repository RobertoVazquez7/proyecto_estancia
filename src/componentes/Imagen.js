import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Imagen = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const { largeImageURL, likes, tags, views } = props.imagen;
    const { descripcion, imagen, link, nombre, nombreTienda, precio } = props.imagen;
    // console.log( nombre, descripcion, largeImageURL, likes, tags, views )

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb4 contenedor-card">
            <div className="card">
                <img src={imagen} className="card-img-top" height="200" width="200" />
                <div className="card-body text-center">
                    <p className="card-text">{nombre} </p>
                    <p className="card-text">{precio} </p>
                    <div >
                        <Button variant="primary" onClick={handleShow} style={{ backgroundColor: '#C9571A', border: 'none' }} >
                            Ver detalles
                        </Button>
                        <Modal show={show} onHide={handleClose} animation={true} >
                            <Modal.Header closeButton className='header'>
                                <Modal.Title>
                                    <div className='column' >
                                        <h4> {nombre} </h4>
                                        <h5>Disponible en: {nombreTienda}</h5>
                                        <h6> Precio {precio} </h6>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='body-modal' >
                                <img className='imagen-detalles' src={imagen} height="250" width="250" />
                            </Modal.Body>
                            <Modal.Footer className="text-center footer">
                                <div className='column' >
                                    <p>
                                        {descripcion}
                                    </p>
                                    <Button variant="primary" href={link} onClick={handleShow} style={{ backgroundColor: '#C9571A', border: 'none' }} >
                                        Ver en pagina original
                                    </Button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Imagen;