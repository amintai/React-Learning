import React from 'react';

const Hello = (props) => {
    // with JSX its much more easier and maintainable 
    // so wjy we need React to import 
    // jsx internally trasform our code to React.createElement
    // JSX keeps code elegent , classy and simple

    return(
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )


    // JSX differences
    // class-> className
    // for -> htmlFor
    // camelCase Property naming covention
    // onclick -> onClick
   
    
    // this is using React.creatElement

    // return React.createElement(
    //     'div',
    //     {id:"hello"},
    //     React.createElement('h1',{className:"hello"},'Hello AMiN')

    // )
}
export default Hello