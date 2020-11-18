import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';


export default class App extends React.Component {
  render() {
    return (
      <div className='Airwin'>
        <BrowserRouter>
          <Switch>
            <Header />
            <Home />
            <Footer />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}