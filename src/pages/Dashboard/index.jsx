import React, { useState } from 'react';
import Sidebar from './sidebar';
import PieChart from './piechart';
import './styles.css';

const energyData = {
    labels: ['Residencial', 'Comercial', 'Industrial', 'Transporte', 'Outros'],
    values: [500, 300, 200, 100, 50],
};

const Dashboard = () => {
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarMinimized(!isSidebarMinimized);
    };

    return (
        <div className="energy-dashboard">
            <Sidebar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />
            <div className={isSidebarMinimized ? 'dashboard-content minimized' : 'dashboard-content'}>
                <h1>Energia Sustentável</h1>
                <h2>Relatórios e Estatísticas</h2>
                <div className="chart-container">
                    <PieChart data={energyData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
