import React from 'react';

const tokenData = [
    { name: 'Token 1', gastosMensais: 150 },
    { name: 'Token 2', gastosMensais: 200 },
    { name: 'Token 3', gastosMensais: 100 },
    { name: 'Token 4', gastosMensais: 180 },
];

const tarifaPorKwh = 0.50;

const TabelaDeGastos = () => {
    return (
        <div className="tabela-container">
            <h3 className="tabela-header">Gastos Mensais e Valores (R$)</h3>
            <table className="gastos-table">
                <thead>
                    <tr>
                        <th>Token</th>
                        <th>Gastos Mensais (kWh)</th>
                        <th>Valor a Pagar (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {tokenData.map((token, index) => (
                        <tr key={index}>
                            <td>{token.name}</td>
                            <td>{token.gastosMensais} kWh</td>
                            <td>R$ {(token.gastosMensais * tarifaPorKwh).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaDeGastos;
