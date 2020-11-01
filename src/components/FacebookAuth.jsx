import React from "react";
import firebase from "firebase";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { getUser } from "../store/actions";
import { FaFacebook } from "react-icons/fa";

const FacebookAuth = (props) => {
  const provider = new firebase.auth.FacebookAuthProvider();

  const signInWithFacebook = () => {
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
    <p className="facebook" onClick={signInWithFacebook}>
      <FaFacebook /> &nbsp;Continue with Facebook
    </p>
  );
};

export default connect(null, { getUser })(FacebookAuth);
