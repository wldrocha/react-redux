import React from "react";
import { useEffect } from "react";
import "../assets/styles/components/InfoText.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUSerAction } from "../redux/userDucks";

import CreditCard from "../components/CreditCard";


const UserList = () => {

  const dispatch = useDispatch();

  const users = useSelector(store => store.users.array)
  useEffect(() => {
    dispatch(getUSerAction());
    console.log(users);
  }, [dispatch]);


  return (
    <div>
      {users.map((item) => (
        <CreditCard key={ item.id} {...item} />
      ))}
    </div>
  );
};

export default UserList;
