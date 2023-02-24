import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faLocationDot, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import classes from "../../styles/Contact.module.css"

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: 444404222,
            location: "United Kingdom",
            email: "fakemail@gmail.com",
            github: "github.com/myfakeprofile",
            linkedIn: "linkedin.com/in/fakelink",
            editMode: false
        }
    };

    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={classes.container}>
                {this.state.editMode ? (
                    <form onSubmit={this.handleSubmit}>
                        <label>Phone Number:
                            <input
                                type="number"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                            >
                            </input>
                        </label>
                        <label>Location:
                            <input
                                type="text"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleInputChange}
                            >
                            </input>
                        </label>
                        <label>Email:
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            >
                            </input>
                        </label>

                        <label>Github:
                            <input
                                type="text"
                                name="github"
                                value={this.state.github}
                                onChange={this.handleInputChange}
                            >
                            </input>
                        </label>
                        <label>LinkedIn:
                            <input
                                type="text"
                                name="linkedIn"
                                value={this.state.linkedIn}
                                onChange={this.handleInputChange}
                            >
                            </input>
                        </label>
                        <button className={classes.btn} onClick={this.handleSubmit}>Submit</button>
                    </form>
                ) : (
                    <div>
                        <h2 className={classes.heading}>CONTACT</h2>
                        <p> <FontAwesomeIcon icon={faPhoneVolume} /> {this.state.phone}</p>
                        <p><FontAwesomeIcon icon={faLocationDot} /> {this.state.location}</p>
                        <p><FontAwesomeIcon icon={faSquareEnvelope} /> {this.state.email}</p>
                        <p><FontAwesomeIcon icon={faGithub} /> {this.state.github}</p>
                        <p><FontAwesomeIcon icon={faLinkedin} /> {this.state.linkedIn}</p>
                        <button className={classes.btn} onClick={this.handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Contact;