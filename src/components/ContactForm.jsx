import React from 'react';
import './ContactForm.scss';
import '../vendor/css/fontello.css';

function ContactForm() {
    return (
      <div className="add-contact">
            <div className="logo">
                <h1 className="title">Lista kontaktów</h1>
                <div className="logo-ico icon-contacts"></div>
            </div>
            <form className="contact-add-form">
                <div className="wrapper">
                    <div className="desc">Imię</div>
                    <input type="text" name="name" className="name" placeholder="Imię" required></input>
                </div>
                <div className="wrapper">
                    <div className="desc">Nazwisko</div>
                    <input type="text" name="surname" className="surname" placeholder="Nazwisko" required></input>
                </div>
                <div className="wrapper">
                    <div className="desc">Mail</div>
                    <input type="email" name="mail" className="mail" placeholder="Mail" required></input>
                </div>
                <button type="submit" name="send" className="send icon-user-add">Dodaj Kontakt</button>
            </form>
      </div>
    );
  }
  
  export default ContactForm;