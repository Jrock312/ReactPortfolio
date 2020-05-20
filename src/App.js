import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Navbar from './components/Navbar'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Projects from './pages/Projects'
import Footer from  './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
    <BrowserRouter>
      <Switch>
      <Route exact path ={["/", "/ReactPortfolio"]} component = {Home}/>
      <Route path =  {["/Projects","/ReactPortfolio/Projects"]} component = {Projects}/>

     </Switch>
    </BrowserRouter>
    <Footer />
    </React.Fragment>
  );
}

export default App;
