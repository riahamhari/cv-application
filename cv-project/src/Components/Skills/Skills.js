import React, { Component } from "react";
import uniqid from "uniqid"
import classes from "../../styles/Skills.module.css"

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skill: '',
            skills: [
                {
                    id: uniqid(),
                    skill: 'Creative thinking'
                },
                {
                    id: uniqid(),
                    skill: 'Communication'
                },
                {
                    id: uniqid(),
                    skill: 'Listening'
                },
                {
                    id: uniqid(),
                    skill: 'Detail-Oriented'
                },
                {
                    id: uniqid(),
                    skill: 'Time Management'
                },
                {
                    id: uniqid(),
                    skill: 'Problem Solving'
                },
                {
                    id: uniqid(),
                    skill: 'Artistic Eye'
                },
                {
                    id: uniqid(),
                    skill: 'Adaptability'
                }
            ],
            editMode: false

        }
    }

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleAdd = () => {
        this.setState({
            editMode: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: "",
            editMode: false
        })

    }


    render() {
        const {
            skill,
            skills,
            editMode
        } = this.state
        return (
            <div>
                <h2 className={classes.heading}>SKILLS</h2>
                <button onClick={this.handleAdd}>Add Skills</button>
                {editMode ? (
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                name="skill"
                                onChange={this.handleInput}
                                value={skill}
                            ></input>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div className={classes.container}>
                        <ul>
                            {skills.map((skill) => {
                                return (
                                    <li key={uniqid()}>{skill.skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}


export default Skills
