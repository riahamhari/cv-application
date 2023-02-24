import React, { Component } from "react";
import classes from "../../styles/CareerObjective.module.css"


class CareerObjective extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: `An ambitious and driven software engineer seeking to leverage my
            skills and passion for technology to make a positive impact on the
            world. I am excited to join a dynamic team of like-minded individuals
            and work together to solve complex problems and push the
            boundaries of innovation.`,
            editMode: false
        }
    }

    handleInput = (e) => {
        const [name, value] = e.target;
        this.setState({
            [name]: value
        })

    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            editMode: false
        })
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        })
    }

    render() {
        return (
            <div className={classes.wrapper}>
                {this.state.editMode ? (
                    <form onSubmit={this.submitHandler}>
                        <label>
                            Career Objective:
                            <input
                                name="description"
                                value={this.state.description}
                                onChange={this.handleInput}
                            >
                            </input>
                        </label>
                        <button className={classes.btn} type="submit">Submit</button>
                    </form>
                ) : (
                    <div className={classes.container}>
                        <h2 className={classes.heading}>CAREER OBJECTIVE</h2>
                        <p className={classes.paragraph}>{this.state.description}</p>
                        <button className={classes.btn} onClick={this.handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default CareerObjective;