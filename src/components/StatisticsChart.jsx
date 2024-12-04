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
        const response = await fetch("https://api-crud-1-sqcl.onrender.com");
        const result = await response.json();
        const formattedData = result.map((device) => ({
          name: device.name,
          gastosDiarios: device.daily,
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
          <Bar dataKey="gastosDiarios" fill="#FF8042" name="Gastos Diários (kWh)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
