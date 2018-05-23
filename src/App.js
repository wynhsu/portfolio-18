import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Home from './views/Home';
import Photos from './views/Photos';
import About from './views/About';
import Contact from './views/Contact';
import UI from './views/UI';
import Foodie from './views/Foodie';
import Graphic from './views/Graphic';
import Coding from './views/Coding';
import constants from './components/constants';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={constants.routes.home} component={Home} />
          <Route path={constants.routes.ui} component={UI} />
          <Route path={constants.routes.foodie} component={Foodie} />
          <Route path={constants.routes.graphic} component={Graphic} />
          <Route path={constants.routes.coding} component={Coding} />
          <Route path={constants.routes.photos} component={Photos} />
          <Route path={constants.routes.about} component={About} />
          <Route path={constants.routes.contact} component={Contact} />
          <Redirect to={constants.routes.home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
