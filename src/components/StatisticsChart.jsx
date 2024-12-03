import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Dia 1', gastosDiarios: 40, gastosMensais: 800 },
    { name: 'Dia 2', gastosDiarios: 30, gastosMensais: 750 },
    { name: 'Dia 3', gastosDiarios: 20, gastosMensais: 700 },
    { name: 'Dia 4', gastosDiarios: 50, gastosMensais: 850 },
];

const StatisticsChart = () => {
    return (
        <div className="chart-container">
            <h3 className="statistics-header">Gastos de Energia (kWh)</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="gastosDiarios" fill="#FF8042" name="Gastos Diários (kWh)" />
                    <Bar dataKey="gastosMensais" fill="#0088FE" name="Gastos Mensais (kWh)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatisticsChart;
