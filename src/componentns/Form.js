import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username : '',
            comments : '',
            framework : 'react'
        }
    }
    handleUsernameChange = (event) => {
       this.setState({
        username : event.target.value    
    }) 
}
    handleCommentChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleFrameworkChange = (event) => {
        this.setState({
            framework : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Username : ${this.state.username} Comments : ${this.state.comments} 
        Framework : ${this.state.framework}`)
        event.preventDefault()
    }
    render(name) {
        return (
           <form onSubmit={this.handleSubmit}>
            <div>
                <label>Userame</label>
                <input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
            </div>
            <div>
                <label htmlFor="">Comment</label>
                <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
            </div>

            <div>
                <laebel>Fraework</laebel>
                <select value={this.state.framework} onChange={this.handleFrameworkChange}>
                <option value="react">react</option>
                <option value="angular">angular</option>
                <option value="vue">vue</option>
                </select>
                </div>

                <button type='submit'>Submit</button>
           </form>
        )
    }
}

export default Form
