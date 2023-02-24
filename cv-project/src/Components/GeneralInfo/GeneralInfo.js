import React, { Component } from "react";
import classes from "../../styles/GeneralInfo.module.css"

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "John Smith",
            profession: "Software Engineer",
            editMode: false
        };
    }

    handleInputChange = (event) => {

        const { name, value } = event.target;


        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log("Name: " + this.state.name);
        console.log("Profession: " + this.state.profession);


        this.setState({
            editMode: false
        });
    };

    handleEdit = () => {
        this.setState({
            editMode: true
        });
    };

    render() {
        return (
            <div>
                {/* <h2>General Information</h2> */}
                {this.state.editMode ? (
                    <div className={classes.heading}>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}

                                />
                            </label>
                            <label>
                                Profession:
                                <input
                                    type="text"
                                    name="profession"
                                    value={this.state.profession}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                ) : (
                    <div className={classes.heading}>
                        <p className={classes.name}>{this.state.name.toUpperCase()}</p>
                        <p className={classes.profession}>{this.state.profession.toUpperCase()}</p>
                        <button onClick={this.handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        );
    }
}

export default GeneralInfo;
