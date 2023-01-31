import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Paginas/Home'
import Users from './Paginas/Users'

function Routes() {

    // path = qual endereço que vou navegar. Ex: https://plataforma.devclub.com.br/area/produto/item/259651.
    //exact = Usado para forçar ao progrma entender exatamente como o path esta, para que nao haja pré suposiçoes do programa.

    //Switch verifica em todas as rotas para ver confirmar se é aquela mesmo. Apenas para evitar erros e deixar mais fluido.
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/usuarios" component={Users} />

            </Switch>

        </BrowserRouter>
    )


}

export default Routes