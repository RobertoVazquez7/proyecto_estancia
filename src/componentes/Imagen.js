import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Imagen = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { largeImageURL, likes, tags, views } = props.imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb4 contenedor-card">
            <div className="card">
                <img src={largeImageURL} alt={tags} className="card-img-top" height="200" width="200" />
                <div className="card-body text-center">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <div >
                        <Button variant="primary" onClick={handleShow} style={{ backgroundColor: '#C9571A', border: 'none' }} >
                            Ver detalles
                        </Button>
                        <Modal show={show} onHide={handleClose} animation={true} >
                            <Modal.Header closeButton className='header'>
                                <Modal.Title>
                                    <div className='column' >
                                        <h4>Hyundai HyFlip</h4>
                                        <h5>Disponible en: Walmart</h5>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='body-modal' >
                                <img className='imagen-detalles' src={largeImageURL} height="250" width="250" />
                            </Modal.Body>
                            <Modal.Footer className="text-center footer">
                                <div className='column' >
                                    <p>
                                        Hyundai HyFlip tiene un procesador Intel Celeron que permite una conectividad de alta velocidad
                                        y un rendimiento multitarea de gran capacidad de respuesta y una apariencia elegante. Este portátil
                                        convertible 2 en 1 tiene un diseño plegable de 360° y una pantalla táctil FHD. Hyundai HyFlip es veloz
                                        y potente. Además puedes expandir su capacidad de almacenamiento ya que cuenta con una ranura M.2 SSD.
                                        Entre sus principales características destaca un inicio rápido y transiciones más suaves al pasar del
                                        modo portátil al modo tableta y viceversa. Esta computadora HyFlip es ideal para el trabajo y entretenimiento,
                                        cuenta con todo lo necesario para una vida larga. Todos los productos Hyundai tienen 1 año de garantía.
                                    </p>
                                    <Button variant="primary" onClick={handleShow} style={{ backgroundColor: '#C9571A', border: 'none' }} >
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