import React, { Component } from "react";
import classes from "../../styles/Experience.module.css"

class ExperienceList extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }
    render() {
        return (
            <div>
                {this.props.map(exp => (
                    <div>
                        <div className={classes.companyInfo}>

                            <h3>{exp.jobTitle}</h3>
                            <h3>{exp.state.date}</h3>
                            <h3>{exp.state.companyName}<span> | {exp.state.companyLocation}</span></h3>
                        </div>
                        <ul>
                            <li>{exp.state.descriptionOne}</li>
                            <li>{exp.state.descriptionTwo}</li>
                            <li>{exp.state.descriptionThree}</li>
                        </ul>
                        <button onClick={this.handleEdit}>Edit</button>

                    </div>
                ))}

            </div>
        )
    }
}


export default ExperienceList


