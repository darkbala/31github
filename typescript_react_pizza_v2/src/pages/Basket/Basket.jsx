import React from 'react';
import cla from './Basket.module.scss';

function Basket() {
  return (
    <div className={cla.wrap}>
      <h1>Basket</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque voluptate minima qui
        possimus, deleniti expedita numquam error quos quasi? Quod hic aperiam cupiditate velit,
        mollitia voluptas provident placeat voluptatum atque!
      </p>
      <button type="submit">press</button>
    </div>
  );
}

export default Basket;
