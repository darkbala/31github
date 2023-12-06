import React from 'react';
import cla from './Footer.module.scss';

function Footer() {
  return (
    <div className={cla.wrap}>
      <h1>Footer</h1>
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>Basket</li>
      </ul>
    </div>
  );
}

export default Footer;
