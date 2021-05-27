import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            name : 'amin',
            age:21,
            skill : 'java'
        },
        
        {
            name : 'john',
            age:21,
            skill : 'py'
        },
        {
            name : 'salman',
            age:21,
            skill : 'c#'
        },

    ]

    const nameList  = persons.map(p => 
        <Person p={p}/>
        )
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}


export default NameList
