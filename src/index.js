import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Welcome from './Welcome';
import App from './App';
import './index.css'
import './Welcome.css'

ReactDOM.render( 
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={ Welcome }></Route>
      <Route path="/app" exact component={ App }></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);