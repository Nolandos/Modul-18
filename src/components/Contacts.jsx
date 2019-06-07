import React from 'react';
import './Contacts.scss';
import '../vendor/css/fontello.css';

import Contact from './Contact.jsx';

  class Contacts extends React.Component {
    state = {
      contacts : [
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
      ]
    }

    render() {
      const {contacts} = this.state; //destrukturyzacaja contacts z state (żeby nie używać ciągle this.state)

      return (
        <div className="contacts">
            <ul className="contacts-list">
            {contacts.map(contact => { return <Contact key={contact.id}  {...contact} />})}
            </ul>
        </div>
    );
    }
  } 
  
  export default Contacts;