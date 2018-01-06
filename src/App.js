import React, { Component } from 'react';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import ContactForm from "./components/ContactForm"
import Cards from "./components/Cards"

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="brown lighten-5">
          <Navigation />
          <Route exact path="/" component={Cards} />
          <Route exact path="/contact-form" component={ContactForm} />



          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
