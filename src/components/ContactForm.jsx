import React from 'react';
import './ContactForm.scss';
import '../vendor/css/fontello.css';

function ContactForm() {
    return (
      <div className="add-contact">
            <div class="logo">
                <h1>Lista kontaktów</h1>
                <div class="logo-ico icon-contacts"></div>
            </div>
            <form className="contact-add-form">
                <div class="wrapper">
                    <div class="desc">Imię</div>
                    <input type="text" name="name" className="name" placeholder="Imię"></input>
                </div>
                <div class="wrapper">
                    <div class="desc">Nazwisko</div>
                    <input type="text" name="surname" className="surname" placeholder="Nazwisko"></input>
                </div>
                <div class="wrapper">
                    <div class="desc">Mail</div>
                    <input type="text" name="mail" className="mail" placeholder="Mail"></input>
                </div>
                <button type="submit" name="send" className="send">Dodaj Kontakt</button>
            </form>
      </div>
    );
  }
  
  export default ContactForm;