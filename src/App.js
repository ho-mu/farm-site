import React, { Component } from 'react';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Card from "./components/Card"
import ContactForm from "./components/ContactForm"
import cowsGrazing from "./images/calves_6.JPG"
import cowsEating from "./images/calves_5.JPG"
import calfEating from "./images/calves_8.JPG"

class App extends Component {
  render() {
    return (
      <div className="brown lighten-5">
        <Navigation />
        <div className="row additional-top-margin center">
          <div className="" ><Card image={cowsGrazing} tagline={"Calves born and raised onsite"} revealContent="Calves born and raised on site. No growth hormones during entire life. Graise form May to October." /></div>
          <div className="" ><Card image={cowsEating} tagline={"No growth hormones applied"} revealContent="Choice of cuts, including, but not limited to: Chuck Roast, Ribeye Steak, T-bone Steaks, Porterhouse, Sirloin Steaks, Round Steaks, Rump Roast, Soup Bones, Stew Meat, Hamburger/Beef Patties, Beef Summer Sausage, Dried Beef (lunchmeat)." /></div>

          <div className="" ><Card image={calfEating} tagline={"Graise May through October"} revealContent="Purchase by full, half, or quarter. A quarter typically wieghts 150-200lbs. Processed by local meat processor or your choice." /></div>
        </div>
        <ContactForm />



        <Footer />
      </div>
    );
  }
}

export default App;
