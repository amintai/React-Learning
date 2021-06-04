import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class Parentcomp extends Component {
    constructor(props){
        super(props)
        this.state ={
            name : 'amin'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'amin'
            })
        })
    }
    render() {
        console.log('@@@@@@@@@@@@@--------Parent ')
        return (
            <div>
                Parent Component
                <PureComp name={this.state.name}/>
                <RegularComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parentcomp
