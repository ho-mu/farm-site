import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper brown darken-4">
                    <Link to={`/`} href="#!" className="brand-logo white-text">Murphy's Farm</Link>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons cyan lighten-5">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={`/contact-form`} className="white-text">Contact Information</Link></li>
                        <li><Link to={`/`} className="white-text " >About</Link></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><Link to={`/contact-form`} className="white-text">Contact Information</Link></li>
                        <li><Link to={`/`} className="white-text ">About</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;


