import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    if (!data || !data.labels || !data.values) {
        console.error('Os dados fornecidos estão incompletos ou incorretos:', data);
        return <p>Erro: Dados inválidos.</p>;
    }

    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Consumo de Energia (kWh)',
                data: data.values,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <Pie data={chartData} options={options} />;
};

export default PieChart;