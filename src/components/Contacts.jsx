import React from 'react';
import './Contacts.scss';
import '../vendor/css/fontello.css';

import Contact from './Contact.jsx';

const contacts = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
    },
    {
      id: 2,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
    },
    {
      id: 3,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
    }
  ];

  let list = contacts.map(function(contact) {
      return (
        <Contact  contact= {contact} />
      );
  });

function Contacts() {
    return (
        <div className="contacts">
            <ul className="contacts-list">
               {list}
            </ul>
        </div>
    );
  }
  
  export default Contacts;