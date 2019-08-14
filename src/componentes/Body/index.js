import React, {Component} from 'react';
import './styles.css';

import Routes from '../../routes';

export default class Body extends Component{
    state = {
        activePage: "/"
    }

    componentDidMount(){
        const currentPath = document.location.pathname;
        this.setState({activePage:currentPath});
    }

    render(){
        const {activePage} = this.state;
        return(
            <div className="all-header">
                <div className="wrapper-header">
                    <aside id="itens-menu">
                            <nav id="menu-completo">
                                <ul>
                                    <li className={activePage === "/" ? "enable" : "disable"} >
                                        <a href="/">Início</a>
                                    </li>
                                    <li className={activePage === "/banners" ? "enable" : "disable"} >
                                        <a href="/banners">Banners</a>
                                    </li>
                                    <li className={activePage === "/produtos" ? "enable" : "disable"}>
                                        <a href="/produtos">Produtos</a>
                                    </li>
                                    <li className={activePage === "/newsletter" ? "enable" : "disable"}>
                                        <a href="/newsletter">Newsletter</a>
                                    </li>
                                    <li className={activePage === "/contatos" ? "enable" : "disable"}>
                                        <a href="/contatos">Contatos</a>
                                    </li>
                                </ul>
                            </nav>
                    </aside>
                    {/* ITENS TO BE DISPLAYED */}
                    <div className="rest-content">
                        <Routes />
                    </div>
                </div>
            </div>
        );
    }
}