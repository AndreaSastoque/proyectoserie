import React  from 'react';
import Personaje from './Personajes';

const personajes = [
    {
        "id" : 1,
        "genero": "M"
    },
    {
        "id" : 2,
        "nombre": "Jughead"
    },
    {
        "id" : 3,
        "nombre": "Betty Cooper"
    },
    {
        "id" : 4,
        "nombre": "Archie Andrews"
    },
    {
        "id" : 5,
        "nombre": " Veronica Loch"
    },
    {
        "id" : 6,
        "nombre": "Jones"
    },
    {
        "id" : 7,
        "nombre": "Cheryl Blossom"
    }
]

const Contenedor = () => (
    <>
         {
            personajes.map ( c => <Personaje nombre = { c.nombre } id = {c.id}/>)
         }
    </>
);

export default Contenedor;