import React, { Component } from 'react';
import axios from "axios"
import emailjs from "emailjs-com"



class ContactForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        emailPhone: "",
        email: true,
        phone: null,
        contactType: "",
        inquiry: "",
        contentSubmitted: false
    }

    handleRadio = (e) => {
        const val = e.target.value
        console.log("val: ", val)
        if (val === "email") {
            this.setState({
                email: true,
                phone: null
            })
        } else {
            this.setState({
                email: null,
                phone: true
            })
        }

    }

    handleChange = (e) => {

        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }



    sendEmail = (e) => {
        e.preventDefault();
        emailjs.init("user_GLxeqovp04BF487JAwKiD");
        emailjs.send("gmail", "farm_contact", this.state)
            .then((response) => {
                this.setState({
                    contentSubmitted: true,
                    firstName: "",
                    lastName: "",
                    emailPhone: "",
                    email: true,
                    phone: null,
                    contactType: "",
                    inquiry: "",

                })
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);


            }, function (err) {
                console.log("FAILED. error=", err);
            });
    }

    formContent = () => {
        return (
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6 ">
                        <input id="first_name" name="firstName" type="text" className="validate input-field" onChange={this.handleChange} />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" name="lastName" type="text" className="validate input-field" onChange={this.handleChange} />
                        <label htmlFor="last_name">Last Name</label>
                    </div>

                </div>
                <div><p>How would you like to be contacted?</p></div>
                <div>
                    <p>
                        <input name="contactType" value="email" checked={this.state.email ? true : false} type="radio" id="email" className="input-field" onChange={this.handleRadio} />
                        <label htmlFor="email">Email</label>
                    </p>
                    <p>
                        <input name="contactType" value="phone" type="radio" checked={this.state.phone ? true : false} id="phone" onChange={this.handleRadio} />
                        <label htmlFor="phone">Phone</label>
                    </p>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input name="emailPhone" id="emailPhone" type="text" className="validate" onChange={this.handleChange} ></input>
                        <label htmlFor="emailPhone">Email or Phone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea name="inquiry" id="inquiry" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                        <label htmlFor="inquiry">Please describe your inquiry</label>
                    </div>
                </div>
                <div><button type="submit" className="waves-effect waves-light btn brown darken-4" onClick={this.sendEmail} >Contact Me</button></div>
            </form>
        )
    }

    render() {
        return (
            <div className="row container">
                {this.state.contentSubmitted ?
                    <div className="row" ><h3 className="center-align" >Thank you for your inquiry</h3></div> :
                    this.formContent()}

            </div>
        )
    }
}

export default ContactForm;
