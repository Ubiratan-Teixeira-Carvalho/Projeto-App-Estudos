// este arquivo trabalha com as rotas do app,ou seja das páginas

import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){
    return(//chama as paginas de acordo com o direitorio digitado
        <BrowserRouter>
            <Route path="/"  exact component={Landing} /> 
            <Route path="/study" component={TeacherList} />   
            <Route path="/give-classes" component={TeacherForm} />    
        </BrowserRouter> 
    )
}

export default Routes;