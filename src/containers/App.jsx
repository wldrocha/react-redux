import React from "react";
import "../assets/styles/containers/App.scss";
import { Provider } from "react-redux";
import generateStore from "../redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import UserList from "../components/UsersList";

const Principal = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/users" exact>
            <UserList></UserList>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
export default Principal;
