//Developed by Lushan - lujanrojas.informatica@gmail.com
//https://github.com/dracaster

import React from 'react';
import 'typeface-roboto';

//components
import MenuToolbar from './modules/components/menuToolbar/MenuToolbar'
import Footer from './modules/components/footer/Footer'

//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Routes
import { routesPublic } from './modules/layout/routes'

function App() {

  const routeComponentsPublic = routesPublic
    .map(({ path, component }, key) =>
      <Route
        exact path={path}
        component={component}
        key={key} />);

  return (
    <Router>
      <MenuToolbar />
      <Switch>
        {routeComponentsPublic}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
