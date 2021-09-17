import React from 'react';
import { Route, Switch } from "react-router-dom";
import FiatApp from './Componentes/Fiat/Fiat';
import FordApp from './Componentes/Ford/Ford';
import ChevroletApp from './Componentes/Chevrolet/Chevrolet';
import VwApp from './Vw/Vw';
import BrasiliaApp from './Vw/Brasilia/Brasilia';
import MecanicaApp from './Vw/Brasilia/Mecanica/Mecanica';
import HyundaiApp from './Componentes/Hyundai/Hyundai';
import Inicio from './Componentes/Inicio/Inicio'

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" render={() => <Inicio />}></Route>
          <Route exact path="/fiat" render={() => <FiatApp />}></Route>
          <Route exact path="/ford" render={() => <FordApp />}></Route>
          <Route exact path="/chevrolet" render={() => <ChevroletApp />}></Route>
          <Route exact path="/vw" render={() => <VwApp />}></Route>
          <Route exact path="/vw/brasilia" render={() => <BrasiliaApp />}></Route>
          <Route exact path="/vw/brasilia/mecanica" render={() => <MecanicaApp />}></Route>
          <Route exact path="/hyundai" render={() => <HyundaiApp />}></Route>
        </Switch>
      </main>
    </div >
  );
}
export default App;
