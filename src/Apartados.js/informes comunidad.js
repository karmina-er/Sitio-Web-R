import React from 'react'

export const componets = () => {
  return (
    <div>componets</div>
  )
}
import React, { useState } from 'react';

function BlogComunidad() {
    // Estado para almacenar las noticias de la comunidad
    const [noticias, setNoticias] = useState([]);

    // Función para agregar una nueva noticia al blog
    const agregarNoticia = () => {
        const nuevaNoticia = {
            id: noticias.length + 1,
            titulo: 'Título de la nueva noticia',
            contenido: 'Contenido de la nueva noticia...'
        };
        setNoticias([...noticias, nuevaNoticia]);
    };

    return (
        <div>
            <h1>Blog de la Comunidad</h1>
            <button onClick={agregarNoticia}>Agregar Noticia</button>
            <div>
                {noticias.map(noticia => (
                    <div key={noticia.id}>
                        <h2>{noticia.titulo}</h2>
                        <p>{noticia.contenido}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogComunidad;
