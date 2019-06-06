import React from 'react';
import './Contact.scss';
import '../vendor/css/fontello.css';

function Contact(props) {
    console.log(props.contact);
    return (
        <li key={props.contact.id} className="contact">
            <div className="avatar icon-user"></div>
            <div className="contact-info">
                <p className="name">{props.contact.firstName}  {props.contact.lastName}</p>
                <p className="email">{props.contact.email}</p>
            </div>
            <div className="info-ico icon-info"></div>
        </li>
    );
  }
  
  export default Contact;