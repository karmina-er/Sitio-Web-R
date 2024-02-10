import React, { useState } from 'react';

function BlogComunidad() {
    // Almacenar las publicaciones del blog
    const [publicaciones, setPublicaciones] = useState([]);

    // Función nueva publicación al blog
    const agregarPublicacion = () => {
        const nuevaPublicacion = {
            id: publicaciones.length + 1,
            titulo: 'Título de la nueva publicación',
            contenido: 'Contenido de la nueva publicación...'
        };
        setPublicaciones([...publicaciones, nuevaPublicacion]);
    };

    return (
        <div>
            <h1>Blog de la Comunidad Robles</h1>
            <button onClick={agregarPublicacion}>Agregar Publicación</button>
            <div>
                {publicaciones.map(publicacion => (
                    <div key={publicacion.id}>
                        <h2>{publicacion.titulo}</h2>
                        <p>{publicacion.contenido}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogComunidad;
