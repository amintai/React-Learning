import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        alert('Hello')
        console.log('CLicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class</button>
            </div>
        )
    }
}

export default ClassClick
