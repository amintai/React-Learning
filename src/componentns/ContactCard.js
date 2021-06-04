import React , {useState}  from 'react';
import './Contact.css';

function ContactCard(props) {

     const [showAge, setShowAge] = useState(false);

    return (
        <div className="contact-card">
         <img src={props.avatar} alt="profile" />
          <div className="user-details">
            <p>name : {props.name}</p>
            <p>email : {props.email}</p>
            {showAge && <p>age : {props.age}</p>}
            <button onClick= {() => setShowAge(!showAge)}>Toggle Age</button>
          </div>
        </div>
    
    )
}

export default ContactCard
