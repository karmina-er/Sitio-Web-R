import React, { useState } from 'react';

function FormularioVotacion() {
    const [nombre, setNombre] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [voto, setVoto] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleNumeroCasaChange = (event) => {
        setNumeroCasa(event.target.value);
    };

    const handleVotoChange = (event) => {
        setVoto(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // enviar los datos del formulario 
        console.log('Nombre:', nombre);
        console.log('Número de Casa:', numeroCasa);
        console.log('Voto:', voto);
        // limpiar los campos del formulario
        setNombre('');
        setNumeroCasa('');
        setVoto('');
    };

    return (
        <div>
            <h2>Formulario de Votación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input type="text" value={nombre} onChange={handleNombreChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Número de Casa:
                        <input type="text" value={numeroCasa} onChange={handleNumeroCasaChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Voto:
                        <select value={voto} onChange={handleVotoChange} required>
                            <option value="">Selecciona tu voto</option>
                            <option value="SI">Sí</option>
                            <option value="NO">No</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Enviar Voto</button>
            </form>
        </div>
    );
}

export default FormularioVotacion;
