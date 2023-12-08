import React from 'react';
import cla from './Header.module.scss';

function Header() {
  return (
    <div className={cla.wrap}>
      <h1>Header</h1>
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>Basket</li>
      </ul>
      <a href="#">press to open youtube</a>
      <p>its just for challenge</p>
    </div>
  );
}

export default Header;
