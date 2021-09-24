import React from "react";

const personajes = [
    {
        
        "edad" : 23,
        "genero": "M",
        "imagen": "Sin imagen"
    },
    {
        "id" : 2,
        "nombre": " Jughead",
        "edad" : 20,
        "genero": "M",
        "imagen": "https://i.pinimg.com/564x/59/e7/68/59e768ae027aeb8d0d363d1878b0a240.jpg"
    },
    {
        "id" : 3,
        "nombre": "Betty Cooper",
        "edad" : 19,
        "genero": "F",
        "imagen": "https://i.pinimg.com/564x/87/3a/5c/873a5cbc5d3c9f966b3e575ea0eea785.jpg"
    },
    {
        "id" : 4,
        "nombre": "Archie Andrews",
        "edad" : 20,
        "genero": "M",
        "imagen": "https://i.pinimg.com/564x/22/63/b6/2263b66d5256c828150293870fcbfa30.jpg"
    },
    {
        "id" : 5,
        "nombre": "Veronica Loch",
        "edad" : 19,
        "genero": "F",
        "imagen": "https://i.pinimg.com/564x/f7/5b/75/f75b757a4ab150eb9d180a7d9ab9bb67.jpg"
    },
    {
        "id" : 6,
        "nombre": "Jones",
        "edad" : 40,
        "genero": "M",
        "imagen": "https://i.pinimg.com/564x/55/bb/4a/55bb4a26b52458e2becb9efd1d99a274.jpg"
    },
    {
        "id" : 7,
        "nombre": "Cheryl Blossom",
        "edad" : 20,
        "genero": "F",
        "imagen": "https://i.pinimg.com/564x/1b/51/db/1b51dbaa5bba983feb838a7a3649a1cf.jpg"
    }
    
    
]

const PersonajeDetalle = ({match}) => {
    const personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0];

    return(
        <>
            {
                personaje ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {personaje.nombre}
                            </h5>
                            <p className="card-text">Edad: {personaje.edad}.</p>
                            <p className="card-text">Genero: {personaje.genero}.</p>
                            <img src={personaje.imagen} alt="No se encuentra imagen"/>
                        </div>
                    </div>
                ):
                <h1>El Id no esta registrado.</h1>
            }
            <a href={`/personajes`}>Ver todos</a>
        </>
    );
};

export default PersonajeDetalle;