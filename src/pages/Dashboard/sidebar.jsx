import React from 'react';
import './styles.css';

const Sidebar = ({ isMinimized, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
            {/* Cabeçalho */}
            <div className="sidebar-header" onClick={toggleSidebar}>
                {isMinimized ? (
                    <span className="material-icons">menu</span>
                ) : (
                    <h2 className="brand-name">BitWave</h2>
                )}
            </div>

            {/* Botão de alternância */}

            {/* Ícones apenas */}
            <ul className="sidebar-items">
                <li className="sidebar-item">
                    <span className="material-icons">visibility</span>
                </li>
                <li className="sidebar-item">
                    <span className="material-icons">menu_book</span>
                </li>
                <li className="sidebar-item">
                    <span className="material-icons">settings</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;