import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (

            <div className="card additional-right-left-margin col 2s brown lighten-5">
                <div className="card-image waves-effect waves-block waves-light ">
                    <img className="activator " src={this.props.image} />
                </div>

                <div className="card-content brown darken-4 col 2s">
                    <span className="card-title activator  white-text ">{this.props.tagline}<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal col 1s brown darken-4  brown-text text-lighten-4">
                    <span className="card-title  brown-text text-lighten-4">Calves born and raised onsite.<i className="material-icons right brown-text text-lighten-4">close</i></span>
                    <p cyan darken-4>{this.props.revealContent}</p>
                </div>
            </div>
        )
    }
}

export default Card;
