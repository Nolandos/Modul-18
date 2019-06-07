import React from 'react';
import './Contact.scss';
import '../vendor/css/fontello.css';

const Contact = ({id, firstName, lastName, email}) => (
    
        <li key={id} className="contact">
            <div className="avatar icon-user"></div>
            <div className="contact-info">
                <p className="name">{firstName}  {lastName}</p>
                <p className="email">{email}</p>
            </div>
            <div className="info-ico icon-info"></div>
        </li>
)  
  
  
  export default Contact;