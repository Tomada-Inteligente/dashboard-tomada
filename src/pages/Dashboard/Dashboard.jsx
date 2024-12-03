import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import Sidebar from '../../components/Sidebar.jsx';
import StatisticsChart from '../../components/StatisticsChart.jsx'; // Importa o componente StatisticsChart
import './styles.css';
import api from '../../services/api.js';
import PieChartComponent from '../../components/PieChartComponent';
import TabelaDeGastos from '../../components/TabelaDeGastos.jsx';


const Dashboard = () => {
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Inicializa o navigate

    const toggleSidebar = () => {
        setIsSidebarMinimized(!isSidebarMinimized);
    };

    return (


        <div className="dashboard">
            <Sidebar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />
            <div className={`dashboard-content ${isSidebarMinimized ? 'minimized' : ''}`}>
                <h1>Bem-vindo ao Painel do Usuário</h1>

                <div className="dashboard-container">
                    <h1 style={{ textAlign: "center", color: "#00c49f" }}>Dashboard de Energia</h1>

                    {/* Gráfico de Barras */}
                    <div className="chart-container">
                        <StatisticsChart />
                    </div>

                    {/* Gráfico de Pizza */}
                    <div className="pie-chart-container">
                        <PieChartComponent />
                    </div>

                    {/* Tabela de Gastos */}
                    <div className="tabela-container">
                        <TabelaDeGastos />
                    </div>
                </div>

                <br>
                </br>
            </div>




        </div>
    );
};

export default Dashboard;
