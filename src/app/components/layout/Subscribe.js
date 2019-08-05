import React, { useState } from 'react';

export const Subscribe = () => {
  const [emailSubscribe, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const emailSub = async (e) => {
    e.preventDefault();
    if (emailSubscribe.length < 1) {
      setEmailError('Please input your correct e-mail');
      return;
    }
    const filterEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filterEmail.test(emailSubscribe)) {
      setEmailError('Incorrect e-mail');
      return;
    }
    console.log('subscribe');
  };
  return (
    <div className="subscribe">
      <div className="title">
        <h2>Subscribe to the newsletter</h2>
        <span>All the most interesting articles in our mail</span>
      </div>
      <form onSubmit={emailSub} noValidate>
        <label htmlFor="subemail">
          <input type="email" name="subemail" placeholder="Your e-mail" value={emailSubscribe} onChange={handleEmail} />
        </label>
        <label htmlFor="submit">
          <input type="submit" name="subscribe" value="Subscribe" />
        </label>
        <div className="errors">
          {emailError}
        </div>
      </form>
    </div>
  );
};
