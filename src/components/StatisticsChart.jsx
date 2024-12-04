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

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const response = await fetch("https://api-dashboard-q4h8.onrender.com/devices/daily");
        const result = await response.json();

        // Atribuindo limite fixo (50, 100, 150, etc.) para cada dispositivo
        const formattedData = result.map((device, index) => ({
          name: device.name,  // Usando o nome do dispositivo
          gastosDiarios: device.daily,
          limiteDiario: device.weekly,
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
          {/* Barra de Limite Diário (fixo e incremental de 50 em 50) */}
          <Bar
            dataKey="limiteDiario"
            fill="#0088FE"
            name="Gastos Semanais (kWh)"
            barSize={30} // Tamanho das barras do limite diário
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;