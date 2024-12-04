import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const PieChartComponent = () => {
  const [data, setData] = useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Cores dos dispositivos (tokens)

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const response = await fetch("https://api-dashboard-q4h8.onrender.com/devices/daily"); // Novo link da API
        const result = await response.json();
        const formattedData = result.map((device, index) => ({
          name: device.name,
          value: device.daily, // O valor será o kWh gasto por cada dispositivo
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDeviceData();
  }, []);

  const renderCustomLabel = ({ name, value }) => {
    return `${name}: ${value} kWh`; // Formatação do rótulo com o nome e o valor de kWh
  };

  return (
    <div className="pie-chart-container">
      <h3 className="chart-header">Distribuição de Energia Consumida por Dispositivo</h3>
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
            label={renderCustomLabel} // Rótulo customizado com o nome e o valor
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> // Cor personalizada para cada dispositivo
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} kWh`} /> {/* Formatação do tooltip */}
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
