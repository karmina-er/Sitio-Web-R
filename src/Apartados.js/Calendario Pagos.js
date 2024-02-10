import React from 'react';

function CalendarioPagos() {
   
    const fechasPagos = [
        { id: 1, fecha: '2024-02-10', concepto: 'Pago mensual de mantenimiento' },
        { id: 2, fecha: '2024-03-10', concepto: 'Pago mensual de mantenimiento' },
        { id: 3, fecha: '2024-04-10', concepto: 'Pago mensual de mantenimiento' },
        
    ];

    return (
        <div>
            <h2>Calendario de Fechas Límites de Pagos - Comunidad Robles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha Límite</th>
                        <th>Concepto</th>
                    </tr>
                </thead>
                <tbody>
                    {fechasPagos.map(fechaPago => (
                        <tr key={fechaPago.id}>
                            <td>{fechaPago.fecha}</td>
                            <td>{fechaPago.concepto}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CalendarioPagos;
