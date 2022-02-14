import React from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PaginasApp } from './data/PaginasApp';
import Menu from './data/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        {PaginasApp.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
      </Router>
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
    </div>
  );
}

export default App;
