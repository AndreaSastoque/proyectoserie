import React from 'react';
import PropTypes from 'prop-types';

const Personajes = ({nombre, edad, genero, imagen}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {nombre}
            </h5>
            <p className="card-text">Edad: {edad}.</p>
            <p className="card-text">Genero: {genero}.</p>
            <img src={imagen} alt="No se encuentra imagen"/>
        </div>
    </div>
);

Personajes.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string,
    imagen: PropTypes.string
}

Personajes.defaultProps = {
    nombre: "no tiene nombre"
}

export default Personajes;