import React from 'react';
import './sass/App.scss';

import './components/ContactForm.jsx';
import ContactForm from './components/ContactForm.jsx';
import Contacts from './components/Contacts.jsx';


function App() {
  return (
    <div className="App">
      <ContactForm />
      <Contacts />
    </div>
  );
}

export default App;

