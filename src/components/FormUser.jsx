import React, { Fragment } from 'react';
import '../assets/styles/components/FormUSer.scss'

const FormUser = ({activateForm}) =>{

  return (
    <Fragment>
      <form
        action=""
        className={`form-user ${activateForm ? "active-form" : ""}`}
      >
        <input type="text" className="input-form" placeholder="Name" />
        <input type="text" className="input-form" placeholder="Number phone" />
        <input type="text" className="input-form" placeholder="Company" />
        <input type="text" className="input-form" placeholder="User name" />
        <input type="text" className="input-form" placeholder="Email" />
        <input type="text" className="input-form" placeholder="City" />
        <input type="text" className="input-form" placeholder="website" />
        <button className="button-form">Update</button>
      </form>
    </Fragment>
  );
}

export default FormUser;