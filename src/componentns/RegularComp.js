import React, { Component } from 'react'

export class Regularcomp extends Component {
    render() {
        console.log('Regular')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default Regularcomp
