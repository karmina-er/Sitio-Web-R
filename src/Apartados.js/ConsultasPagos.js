import React, { useState } from 'react';

function ConsultaAdeudos() {
    // Base de datos 
    const [adeudos, setAdeudos] = useState([
        { id: 1, concepto: 'Mantenimiento mensual', monto: 50, estado: 'al corriente', propietario: 'Juan Perez', numeroCasa: '123', calle: 'Calle Principal' },
        { id: 2, concepto: 'Servicios de agua', monto: 25, estado: 'reciente', propietario: 'Maria Rodriguez', numeroCasa: '456', calle: 'Calle Secundaria' },
       
    ]);

    // Aeudos recientes
    const adeudosRecientes = adeudos.filter(adeudo => adeudo.estado === 'reciente');

    // Pago al corriente
    const pagoAlCorriente = adeudos.filter(adeudo => adeudo.estado === 'al corriente');

    return (
        <div>
            <h2>Consulta de Adeudos</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <h3>Casas con Adeudos Recientes</h3>
                    <ul>
                        {adeudosRecientes.slice(0, 10).map(adeudo => (
                            <li key={adeudo.id}>
                                <strong>Propietario:</strong> {adeudo.propietario}<br />
                                <strong>Número de Casa:</strong> {adeudo.numeroCasa}<br />
                                <strong>Calle:</strong> {adeudo.calle}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    <h3>Casas con Pago al Corriente</h3>
                    <ul>
                        {pagoAlCorriente.slice(0, 10).map(adeudo => (
                            <li key={adeudo.id}>
                                <strong>Propietario:</strong> {adeudo.propietario}<br />
                                <strong>Número de Casa:</strong> {adeudo.numeroCasa}<br />
                                <strong>Calle:</strong> {adeudo.calle}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ConsultaAdeudos;

