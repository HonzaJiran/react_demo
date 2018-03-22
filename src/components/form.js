import React, { Component } from 'react'
import '../App.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            show_input: true
        }

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({show_input:false})
    }

    render() {
        return (
        <div className="Form">
            <br />
            {
                this.state.show_input &&
                <form onSubmit={this.handleSubmit}>
                    <input type="text" /><br /><br />
                    <input type="password" /><br /><br />

                    <button type="submit">Submit</button>
                </form>
            }
        </div>
        );
    }
}

export default Form;
