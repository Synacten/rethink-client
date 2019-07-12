import React, { useState } from 'react';

export const Subscribe = () => {
  const emailSub = (e) => {
    e.preventDefault();
    console.log('subscribe');
  };
  return (
    <div className="subscribe">
      <div className="title">
        <h2>Subscribe to the newsletter</h2>
        <span>All the most interesting articles in our mail</span>
      </div>
      <form onSubmit={emailSub}>
        <label htmlFor="subemail">
          <input type="email" name="subemail" placeholder="Your e-mail" />
        </label>
        <label htmlFor="submit">
          <input type="submit" name="subscribe" value="Subscribe" />
        </label>
      </form>
    </div>
  );
};
