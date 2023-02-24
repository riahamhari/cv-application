import React, { Component } from "react";
import uniqid from 'uniqid';
import classes from "../../styles/Experience.module.css"


class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            companyName: "",
            companyLocation: "",
            jobTitle: "",
            descriptionOne: "",
            descriptionTwo: "",
            descriptionThree: "",

            experience: [
                {
                    date: "March 2020 - present",
                    companyName: "TUI",
                    companyLocation: "Luton, UK",
                    jobTitle: "Frontend Developer",
                    descriptionOne: `Spearheaded the updating of crew training software, working with
                                 product managers to re-architect the Legality Report Checking
                                app. This app tracks pilot and cabin crew licence expiries. The
                                 rebuild successfully reduced the occurrences of crew being
                                 grounded due to licence expiries by 30%`,
                    descriptionTwo: `Tested the crew recency tracking app for bugs, operating speed
                                and accuracy. Effectively communicating with the systems team,
                                documenting processes to increase efficiency by 18%`,
                    descriptionThree: `Developed a weather app to monitor weather conditions in cities
                                that the airline flies to, in order to predict flight training
                                cancellations due to strong winds.`,
                    id: uniqid()

                }
            ],
            editMode: false
        }
    }

    handleInput = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            experience: this.state.experience.concat({
                date: this.state.date,
                companyName: this.state.companyName,
                companyLocation: this.state.companyLocation,
                jobTitle: this.state.jobTitle,
                descriptionOne: this.state.descriptionOne,
                descriptionTwo: this.state.descriptionTwo,
                descriptionThree: this.state.descriptionThree,
                id: uniqid(),
            }),
            date: "",
            companyName: "",
            companyLocation: "",
            jobTitle: "",
            descriptionOne: "",
            descriptionTwo: "",
            descriptionThree: "",
            editMode: false

        })


    }

    handleEdit = (e) => {
        console.log(e.target)
        this.setState({
            editMode: true
        })
    }

    handleAddExp = () => {
        // this.setState((prevState) => {

        // })
        this.setState({
            editMode: true
        })



    }


    render() {
        const {
            date,
            companyName,
            companyLocation,
            jobTitle,
            descriptionOne,
            descriptionTwo,
            descriptionThree,
            experience,
            editMode,
        } = this.state
        return (
            <div>

                <h2>EXPERIENCE</h2>
                <button onClick={this.handleAddExp}>Add Experience</button>
                {editMode ? (
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Date:
                            <input
                                type="text"
                                name="date"
                                value={date}
                                onChange={this.handleInput}></input>
                        </label>
                        <label>
                            Company Name:
                            <input
                                type="text"
                                name="companyName"
                                value={companyName}
                                onChange={this.handleInput}></input>
                        </label>
                        <label>
                            Location:
                            <input
                                type="text"
                                name="companyLocation"
                                value={companyLocation}
                                onChange={this.handleInput}></input>
                        </label>
                        <label>
                            Job Title:
                            <input
                                type="text"
                                name="jobTitle"
                                value={jobTitle}
                                onChange={this.handleInput}></input>
                        </label>
                        <label>
                            Description:
                            <ul>
                                <li>
                                    <input
                                        type="text"
                                        name="descriptionOne"
                                        value={descriptionOne}
                                        onChange={this.handleInput}>

                                    </input>
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="descriptionTwo"
                                        value={descriptionTwo}
                                        onChange={this.handleInput}>
                                    </input>
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="descriptionThree"
                                        value={descriptionThree}
                                        onChange={this.handleInput}>
                                    </input>
                                </li>
                            </ul>

                        </label>
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div>
                        {experience.map((exp) => {
                            return (
                                <div>
                                    <div className={classes.companyInfo}>
                                        <h3>{exp.jobTitle}</h3>
                                        <h3>{exp.date}</h3>
                                        <h3>{exp.companyName}<span> | {exp.companyLocation}</span></h3>
                                    </div>
                                    <ul>
                                        <li key={uniqid()}>{exp.descriptionOne}</li>
                                        <li key={uniqid()}>{exp.descriptionTwo}</li>
                                        <li key={uniqid()}>{exp.descriptionThree}</li>
                                    </ul>
                                    <button id={exp.id} onClick={this.handleEdit}>Edit</button>
                                </div>
                            )
                        })}


                    </div>
                )}
            </div>
        )
    }
}

export default Experience;