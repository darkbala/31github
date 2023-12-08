import React from 'react';
import cla from './Home.module.scss';

function Home() {
  return (
    <div className={cla.wrap}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet temporibus culpa, totam
        delectus natus possimus ducimus accusamus voluptates tempora doloremque rerum mollitia
        voluptatum eum atque unde deserunt quidem ipsam ipsum?
      </p>
      <button type="submit">press</button>
      <p>its just for challenge</p>
    </div>
  );
}

export default Home;
