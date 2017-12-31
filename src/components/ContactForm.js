import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        contactType: "",
        inquiry: ""
    }

    handleChange = (e) => {
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {
        return (
            <div className="row container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 ">
                            <input id="first_name" type="text" className="validate input-field" onChange={this.handleChange} />
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate input-field" onChange={this.handleChange} />
                            <label for="last_name">Last Name</label>
                        </div>

                    </div>
                    <div><p>How would you like to be contacted?</p></div>
                    <div>
                        <p>
                            <input name="contactType" type="radio" id="email" className="input-field" onChange={this.handleChange} />
                            <label for="email">Email</label>
                        </p>
                        <p>
                            <input name="contactType" type="radio" id="phone" onChange={this.handleChange} />
                            <label for="phone">Phone</label>
                        </p>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email-or-phone" id="email_phone" type="text" className="validate" onChange={this.handleChange} ></input>
                            <label for="email_phone">Email or Phone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea name="inquiry" id="inquiry" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                            <label for="inquiry">Please describe your inquiry</label>
                        </div>
                    </div>
                    <div><a className="waves-effect waves-light btn brown darken-4">Contact Me</a></div>
                </form>
            </div>
        )
    }
}

export default ContactForm;
