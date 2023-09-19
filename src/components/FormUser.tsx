import React, { Fragment, useEffect, useState } from 'react';
import '../assets/styles/components/FormUSer.scss'
import { useDispatch, useSelector } from "react-redux";
import { getUSerAction, updateUserAction } from "../redux/userDucks";

const FormUser = ({ activateForm, userId, setActivateForm }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    phone: "",
    company: "",
    username: "",
    email: "",
    address: {
      city: "",
    },
    website: "",
  });


  const userData = useSelector((store) => store.users.user[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUSerAction(userId));
    setUser(userData);
  }, [dispatch, userData]);

  const updateInfo = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(updateUserAction(user));
    activateForm = !activateForm;
  };

  const inputChangedHandler = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Fragment>
      <form
        action=""
        className={`form-user ${activateForm ? "active-form" : ""}`}
      >
        <input
          type="text"
          className="input-form"
          name="name"
          placeholder="Name"
          // value={user && user.name}
          onChange={(event) => inputChangedHandler(event)}
        />
        <input
          type="text"
          className="input-form"
          name="phone"
          placeholder="Number phone"
          // value={user && user.phone}
          onChange={(event) => inputChangedHandler(event)}
        />
        <input
          type="text"
          className="input-form"
          name="company"
          placeholder="Company"
          // value={user && user.company}
          onChange={(event) => inputChangedHandler(event)}
        />
        <input
          type="text"
          className="input-form"
          name="username"
          placeholder="User name"
          // value={user && user.username}
          onChange={(event) => inputChangedHandler(event)}
        />
        <input
          type="text"
          className="input-form"
          name="email"
          placeholder="Email"
          // value={user && user.email}
          onChange={(event) => inputChangedHandler(event)}
        />
        <input
          type="text"
          className="input-form"
          name="city"
          placeholder="City"
          // value={user && user.address.city}
          onChange={(event) => inputChangedHandler(event)}
        />
        <input
          type="text"
          className="input-form"
          name="website"
          placeholder="website"
          // value={user && user.website}
          onChange={(event) => inputChangedHandler(event)}
        />
        <button className="button-form" onClick={updateInfo}>
          Update
        </button>
      </form>
    </Fragment>
  );
};

export default FormUser;