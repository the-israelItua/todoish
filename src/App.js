import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import IndexPage from "./layouts";
import LoginPage from "./layouts/LoginPage";
import SignUpPage from "./layouts/SignUpPage";
import TodoPage from "./components/TodoPage";

const App = (props) => {
  const user = props.user;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/todos" component={user ? TodoPage : null} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(App);
