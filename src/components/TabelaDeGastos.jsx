import React, { useState, useEffect } from 'react';

const tarifaPorKwh = 0.808; // Nova tarifa por kWh

const TabelaDeGastos = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        // Função para buscar os dados dos dispositivos
        const fetchDeviceData = async () => {
            try {
                const response = await fetch("https://api-dashboard-q4h8.onrender.com/devices/daily"); // Substitua com o link correto
                const result = await response.json();
                
                // Aqui você verifica a estrutura dos dados da API
                if (Array.isArray(result)) {
                    setDevices(result);
                } else {
                    console.error('A resposta da API não contém um array');
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchDeviceData();
    }, []);

    return (
        <div className="tabela-container">
            <h3 className="tabela-header">Gastos Diários e Valores (R$)</h3>
            <table className="gastos-table">
                <thead>
                    <tr>
                        <th>Dispositivo</th>
                        <th>Gastos Diários (kWh)</th>
                        <th>Valor a Pagar (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device, index) => (
                        <tr key={index}>
                            <td>{device.name}</td>
                            <td>{device.daily} kWh</td>
                            <td>R$ {(device.daily * tarifaPorKwh).toFixed(2)}</td> {/* Calculando o valor a pagar */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaDeGastos;
