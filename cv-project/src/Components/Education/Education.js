import React, { Component } from "react";
import uniqid from 'uniqid'
import classes from '../../styles/Education.module.css'


class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            institution: "",
            course: "",
            achievement: "",
            location: "",
            editMode: false,
            addMode: false,
            education: [
                {
                    id: uniqid(),
                    date: "Sep 2013 - Jun 2016",
                    institution: "Cool University",
                    course: "Computer Science",
                    achievement: "2:1",
                    location: "London, UK"
                }
            ]
        }
    }

    handleInput(event, index) {


        const { name, value } = event.target;
        const updatedEducation = [...this.state.education];

        if (!this.state.addMode) {
            updatedEducation[index][name] = value;
            this.setState({ education: updatedEducation });
        }
        this.setState({
            [name]: value
        })


    }

    handleCancel = () => {
        this.setState({
            editMode: false,
            addMode: false
        })
    }
    handleEdit = () => {
        this.setState({
            editMode: true,
            addMode: false
        })
    }
    handleAddEdu = () => {
        this.setState({
            // date: "",
            // institution: "",
            // course: "",
            // achievement: "",
            // location: "",
            editMode: true,
            addMode: true
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { date, institution, course, achievement, location, education, addMode } = this.state;

        // const newEducation = [...education];
        // newEducation[currentIndex] = { date, institution, course, achievement, location };

        const newEducation = {
            id: uniqid(),
            date,
            institution,
            course,
            achievement,
            location
        };
        const updatedEducation = [...education, newEducation];
        console.log(updatedEducation)
        if (!addMode) {

        }
        this.setState({
            education: updatedEducation,
            date: '',
            institution: '',
            course: '',
            achievement: '',
            location: '',
            editMode: false, // Set editMode to false after submitting the form
            addMode: false
        });

    }


    render() {
        const {
            date,
            institution,
            course,
            achievement,
            location,
            editMode,
            addMode,
            education
        } = this.state
        return (
            <div>
                <h2>EDUCATION</h2>
                <button onClick={this.handleAddEdu}>Add Education</button>
                {editMode ? (
                    <form onSubmit={this.handleSubmit}>
                        {education.map((edu, index) => { // pass the index parameter to the map function
                            return (
                                <div key={edu.id}>
                                    <label>
                                        Date:
                                        <input
                                            value={addMode ? date : edu.date}
                                            type="text"
                                            onChange={(e) => this.handleInput(e, index)} // pass the index to handleInput method
                                            name="date"

                                        />
                                    </label>
                                    <label>
                                        Course:
                                        <input
                                            value={addMode ? course : edu.course}
                                            type="text"
                                            onChange={(e) => this.handleInput(e, index)} // pass the index to handleInput method
                                            name="course"
                                        />
                                    </label>
                                    <label>
                                        Institution:
                                        <input
                                            value={addMode ? institution : edu.institution}
                                            type="text"
                                            onChange={(e) => this.handleInput(e, index)} // pass the index to handleInput method
                                            name="institution"
                                        />
                                    </label>
                                    <label>
                                        Achievement:
                                        <input
                                            value={addMode ? achievement : edu.achievement}
                                            type="text"
                                            onChange={(e) => this.handleInput(e, index)} // pass the index to handleInput method
                                            name="achievement"
                                        />
                                    </label>
                                    <label>
                                        Location:
                                        <input
                                            value={addMode ? location : edu.location}
                                            type="text"
                                            onChange={(e) => this.handleInput(e, index)} // pass the index to handleInput method
                                            name="location"
                                        />
                                    </label>


                                </div>
                            )
                        })}
                        <button type="submit">Submit</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </form>
                ) : (
                    <div>
                        {education.map((edu) => {
                            return (
                                <div key={edu.id}>
                                    <div>
                                        <p className={classes.educationDate}>{edu.date}</p>
                                        <p className={classes.educationCourse}>{edu.course}</p>
                                    </div>
                                    <div>
                                        <p className={classes.educationInstitution}>{edu.institution}</p>
                                        <p className={classes.educationAchievement}>{edu.achievement}</p>
                                        <p className={classes.educationLocation}>{edu.location}</p>
                                    </div>

                                </div>
                            )
                        })}
                        <button onClick={this.handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Education;