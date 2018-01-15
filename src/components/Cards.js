import React, { Component } from 'react';
import Card from "./Card"
import cowsGrazing from "./../images/calves_6.JPG"
import cowsEating from "./../images/calves_5.JPG"
import calfEating from "./../images/calves_8.JPG"

class Cards extends Component {
    render() {
        return (<div className="row container auto-adjust">
            <div className=" additional-top-margin">
                <div className="" ><Card image={cowsGrazing} tagline={"Calves born and raised onsite"} revealContent="Calves born and raised on site. No growth hormones during entire life. Graze form May to October." /></div>
                <div className="" ><Card image={cowsEating} tagline={"No growth hormones applied"} revealContent="Choice of cuts, including, but not limited to: Chuck Roast, Ribeye Steak, T-bone Steaks, Porterhouse, Sirloin Steaks, Round Steaks, Rump Roast, Soup Bones, Stew Meat, Hamburger/Beef Patties, Beef Summer Sausage, Dried Beef (lunchmeat)." /></div>
                <div className="" ><Card image={calfEating} tagline={"Graze May through October"} revealContent="Purchase by full, half, or quarter. A quarter typically wieghts 150-200lbs. Processed by local meat processor or your choice." /></div>
            </div>
        </div>
        )
    }
}

export default Cards;
