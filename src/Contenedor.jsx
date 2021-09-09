import React  from 'react';

import Personajes from './Personajes';
import Estudiante from './Estudiante';


const personajes = [
    {
        "edad" : 23,
        "genero": "M",
        "imagen": "Sin imagen"
    },
    {
        "nombre": " jughead",
        "edad" : 28,
        "genero": "M",
        "imagen": "https://i.pinimg.com/564x/59/e7/68/59e768ae027aeb8d0d363d1878b0a240.jpg"
    },
    {
        "nombre": " Betty Cooper",
        "edad" : 23,
        "genero": "F",
        "imagen": "https://spoilertime.com/wp-content/uploads/2018/07/Elizabethcooper.jpg"
    },
    {
        "nombre": "archie andrews",
        "edad" : 20,
        "genero": "M",
        "imagen": "https://es.web.img3.acsta.net/r_1280_720/newsv7/19/09/20/13/57/3211419.jpg"
    },
    {
        "nombre": "veronica loch",
        "edad" : 19,
        "genero": "F",
        "imagen": "https://inetweb.es/wp-content/uploads/2019/01/f8797f4b70352295601e6e588b8dfe3d.jpg"
    },
    {
        "nombre": "cheryl blossom",
        "edad" : 20,
        "genero": "F",
        "imagen": "https://i.pinimg.com/originals/fd/37/76/fd37767af7c0176ac8dde6a616198afd.png"
    }
]


const Contenedor = () => (
    <>
         {
             personajes.map ( c => <Personajes nombre = { c.nombre } edad = { c.edad } genero = { c.genero } imagen = { c.imagen }/>)
         }

         
        
    </>
    
);

export default Contenedor;