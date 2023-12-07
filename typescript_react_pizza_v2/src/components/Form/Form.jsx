import React from 'react';
import cla from './Form.module.scss';

function Form() {
  return (
    <div className={cla.wrap}>
      <h1>Form</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ea eum voluptates
        dolorum debitis provident earum iure laborum sit molestias id, veritatis dolore
        voluptatibus. Assumenda libero iusto temporibus voluptatibus inventore!
      </p>
      <button type="submit">press</button>
    </div>
  );
}

export default Form;
