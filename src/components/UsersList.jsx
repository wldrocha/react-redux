import React from "react";
import { useEffect } from "react";
import "../assets/styles/components/Card.scss";
import "../assets/styles/Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUSersAction } from "../redux/userDucks";

import CreditCard from "../components/CreditCard";


const UserList = () => {

  const dispatch = useDispatch();

  const users = useSelector(store => store.users.array)
  useEffect(() => {
    dispatch(getUSersAction());
    console.log(users);
  }, [dispatch]);


  return (
    <section className="wrapper wrapper--slide">
      {users.map((item) => (
        <CreditCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default UserList;
