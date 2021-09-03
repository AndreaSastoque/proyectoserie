import React from 'react';

let personajes = {
    nombre: "maria",
    edad: 23,
    genero: "f",
    imagen: ""
};

var color = "azul";

const NuevoElemento = () => (
    <div className="contendeor">
        <h3>Personaje</h3>
        <h4>{ props.nombre }</h4>
        <p>Edad: { props.edad } </p>
        <img src={props.imagen}></img>
    </div>
)

export default NuevoElemento; 