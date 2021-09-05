import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import CardItem from './components/CardItem';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Route>
        <Navbar />
        <Switch>
        <HeroSection/>
        </Switch>
        <Cards/>
          <CardItem/>
          <Footer/>
          </Route>
      </Router>
    </>
  );
}

export default App;