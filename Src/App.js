import React from 'react';
import ReactDOM from 'react-dom';
import App from './Comps/App.jsx';
import RouteApp from './Comps/RoutingApp.jsx';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
ReactDOM.render(<RouteApp />,document.getElementById("MainApp"));