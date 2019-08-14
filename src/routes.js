import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// IMPORT ROUTES
import Inicio from './paginas/inicio';
import Banners from './paginas/banners';
import Produtos from './paginas/produtos';
import Newsletter from './paginas/newsletter';
import Contatos from './paginas/contatos';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Inicio}></Route>
            <Route path="/banners" component={Banners}></Route>
            <Route path="/produtos" component={Produtos}></Route>
            <Route path="/newsletter" component={Newsletter}></Route>
            <Route path="/contatos" component={Contatos}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;