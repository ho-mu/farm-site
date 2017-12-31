import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper brown darken-4">
                    <a href="#!" className="brand-logo white-text">Murphy's Farm</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons cyan lighten-5">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html" className="white-text">Contact Information</a></li>
                        <li><a className="white-text " href="badges.html">About</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html" className="white-text ">Contact Information</a></li>
                        <li><a href="badges.html" className="white-text ">About</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;
