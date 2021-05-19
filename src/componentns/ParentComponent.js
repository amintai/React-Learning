import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Salman'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(chidName) {
        alert(`Hello ${this.state.parentName} from ${chidName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
