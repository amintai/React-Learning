import React from 'react'

function Person({p}) {

    return (
        <div>
            <h1>I am {p.name} , i am {p.age} years old and my skill is {p.skill}</h1>
        </div>
    )
}

export default Person
