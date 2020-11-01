import React from "react";
import firebase from "firebase";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { getUser } from "../store/actions";
import { FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const GoogleAuth = (props) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user;
        props.getUser(user);
      })
      .then(() => {
        history.push("/todos");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <p className="google" onClick={signInWithGoogle}>
      <FaGoogle /> &nbsp;Continue with Google
    </p>
  );
};

export default connect(null, { getUser })(GoogleAuth);
