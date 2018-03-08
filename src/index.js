import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Portofolio from './components/portofolio';
import './index.css';
import { Router, Route, IndexRoute, Link,hashHistory, browserHistory } from 'react-router'


ReactDOM.render(
  
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute  component={Home}/>
      <Route  path="/home" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/portofolio" component={Portofolio}/>
    
  
  </Route>
    
    
    
    
</Router> ,
  document.getElementById('root')
);
