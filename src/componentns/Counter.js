import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    increment(){
        // this.setState({
        //     count : this.state.count + 1
        // },
        // () => {
        //     console.log(`Callback Value: ${this.state.count}`)
        // }
        // )
        this.setState(prevState => ({
            count : prevState.count + 1
        }),
        () => {
            console.log(`Callback Value: ${this.state.count}`)
        }
        )
        // console.log('without callback :',this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrement(){
        
        this.setState({
            count : this.state.count - 1
        })
            
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => this.decrement()}>Increment</button>
            </div>
        )
    }
}

export default Counter
