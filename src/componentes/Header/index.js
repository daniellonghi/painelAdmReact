import React from 'react';
import './styles.css';
import logo from '../../img/logo.png';

const Header = () => (
    <header className="colored-tematic" id="header">
        <div id="top-header">
            <div className="wrapper-header">
                <div id="img-item">
                    <img src={logo} alt="Logo Painel Administrativo"/>
                </div>
            </div>
        </div>
    </header>
)

export default Header;