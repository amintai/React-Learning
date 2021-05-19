import React from 'react';

class Message extends React.Component {
    constructor() {
        // this.state ===> to this.setState
        super()
        this.state= {
            message:'Welcome Visitor'
        }
    }
    changeMethod(){
        this.setState({
            message:'Thanks for Sub'
        })
    }
    render() {
        return ( 
        <div>
            <h1>{this.state.message} </h1>
            <button onClick={() => this.changeMethod()}>Subscribe</button>
        </div>

        )}
}

export default Message