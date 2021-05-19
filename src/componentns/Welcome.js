import React from 'react';

class Welcome extends React.Component {
    
    render() {
        const { name , surName ,} = this.props
        
        return (
            <div>
            <h1>Hello {name} and {surName}</h1>
            </div>
        )}
}

export default Welcome