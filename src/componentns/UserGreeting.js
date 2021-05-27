import React, { Component } from 'react'


export class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }

    render() {
// 4) using short curcuite operators

        return this.state.isLoggedIn && <div>Hello</div>
// 3) using turnerry operators to render html      
        // return this.state.isLoggedIn ? (
        //     <div>Welcome AMiN</div>
        // ) : (
        //     <div>Hello Guest</div>
        // )
        
// 2) using javascript variables to render html
        // let message 


        // if(this.state.isLoggedIn) {
        //     message = <div>Hello Amin</div>
        // } else {
        //     message = <div>Hello Guest</div>
        // }
        // return <div>{message}</div>
// 1) basci if else method to render html dynamically
        // return (
        //     <div>
        //         <h1>Hello AMiN</h1>
        //         <h1>Hello Guest</h1>
                
        //     </div>
        // )
    }
}

export default UserGreeting
