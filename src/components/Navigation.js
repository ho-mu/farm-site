import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Navbar, NavItem } from 'react-materialize'

class Navigation extends Component {
    render() {
        return (
            /*<nav>
                <div className="nav-wrapper brown darken-4">
                    <Link to={`/`} href="#!" className="brand-logo white-text">Murphy's Farm</Link>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons brown darken-4">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={`/contact-form`} className="white-text">Contact Information</Link></li>
                        <li><Link to={`/`} className="white-text " >About</Link></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><Link to={`/contact-form`} className="white-text">Contact Information</Link></li>
                        <li><Link to={`/`} className="white-text ">About</Link></li>
                    </ul>
                </div>
            </nav>*/

            <Navbar className="brown darken-4" brand="Murphy's Farm" right>
                {/*<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons brown darken-4">menu</i></a>*/}

                <NavItem className="brown darken-4">  <li><Link to={`/contact-form`} className="white-text">Contact Information</Link></li></NavItem>
                <NavItem className="brown darken-4"> <li><Link to={`/`} className="white-text " >About</Link></li></NavItem>

                {/*<ul className="side-nav" id="mobile-demo">
                    <li><Link to={`/contact-form`} className="white-text">Contact Information</Link></li>
                    <li><Link to={`/`} className="white-text ">About</Link></li>
                </ul>*/}
            </Navbar>

        )
    }
}

export default Navigation;


