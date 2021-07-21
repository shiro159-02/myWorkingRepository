import React from 'react';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/NaviBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import {About} from './pages/About';
import {Project} from './pages/Project';

function App() {
  return (
    <>
    <Router>
      <NaviBar />
      <Switch>

        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
