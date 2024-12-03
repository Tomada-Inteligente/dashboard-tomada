import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Token 1', value: 40 },
    { name: 'Token 2', value: 30 },
    { name: 'Token 3', value: 20 },
    { name: 'Token 4', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomLabel = ({ name, value }) => {
    return `${name}: ${value} kWh`;
};

const PieChartComponent = () => {
    return (
        <div className="pie-chart-container">
            <h3 className="chart-header">Distribuição de Tokens (em kWh)</h3>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie 
                        data={data} 
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={150} 
                        fill="#8884d8" 
                        label={renderCustomLabel} // Adiciona o rótulo customizado
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} kWh`} /> {/* Formata o tooltip */}
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartComponent;
