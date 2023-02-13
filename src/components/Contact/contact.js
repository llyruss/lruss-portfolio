import React, { useState } from 'react';
import './contact.css'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

function Contact(){
    const [email, setEmail] = useState('');
    const [contactName, setContactName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          return;
        };
        if (message=='' || email=='' || contactName==''){
        setErrorMessage('All feilds are required');
          return;
        }};


        const handleInputChange = (e) => {
            setErrorMessage('');
            const { target } = e;
            const inputType = target.name;
            const inputValue = target.value;
        
            if (inputType === 'email') {
                setEmail(inputValue);
              } else if (inputType === 'contactName') {
                setContactName(inputValue);
              } else {
                setMessage(inputValue);
            };
        }
    return (
        <>
        <form>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
         <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>

        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </>
    )
}

export default Contact;