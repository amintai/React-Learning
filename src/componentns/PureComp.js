import React, { PureComponent } from 'react'


export default class PureComp extends PureComponent {
    

    render() {
        console.log('pure')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
