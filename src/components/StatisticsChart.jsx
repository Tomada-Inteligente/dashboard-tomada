import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatisticsChart = () => {
  const [data, setData] = useState([]);
  const limiteDiario = 100; // Limite fixo de energia permitido por dia (em kWh)

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const response = await fetch("https://api-dashboard-q4h8.onrender.com/devices/daily");
        const result = await response.json();
        const formattedData = result.map((device, index) => ({
          name: `Dia ${index + 1}`,  // Adicionando os nomes fixos como "Dia 1", "Dia 2", etc.
          gastosDiarios: device.daily,
          limiteDiario: limiteDiario, // Adicionando o limite fixo para cada dispositivo
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDeviceData();
  }, []);

  return (
    <div className="chart-container">
      <h3 className="statistics-header">Gastos Diários de Energia (kWh)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Barra de Gastos Diários */}
          <Bar
            dataKey="gastosDiarios"
            fill="#FF8042"
            name="Gastos Diários (kWh)"
          />
          {/* Barra de Limite Diário (fixo) */}
          <Bar
            dataKey="limiteDiario"
            fill="#0088FE"
            name="Limite Diário (kWh)"
            barSize={30} // Tamanho das barras do limite diário
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
