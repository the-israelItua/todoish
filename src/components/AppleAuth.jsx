import React from "react";
import firebase from "firebase";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { getUser } from "../store/actions";
import { FaApple } from "react-icons/fa";

const AppleAuth = (props) => {
  const provider = new firebase.auth.OAuthProvider("apple.com");

  const signInWithApple = () => {
    auth
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user;
        props.getUser(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <p className="apple" onClick={signInWithApple}>
      <FaApple /> &nbsp;Continue with Apple
    </p>
  );
};

export default connect(null, { getUser })(AppleAuth);
