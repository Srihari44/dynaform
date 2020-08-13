import React, { useState, useRef, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import "../../Services/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
import Spinner from "../Loader/Loader";
import "./FormBuilder.css";
import { UserContext } from "../../Providers/UserProvider";
import { signOut } from "../../Services/firebase";
import ErrorComp from "../../Components/Error/Error404";

const LinkGen = (props) => {
  const user = useContext(UserContext);
  const [state, stateHandler] = useState({
    response: null,
    clicked: false,
    loaded: false,
  });
  const titRef = useRef(null);
  const bodyRef = useRef(null);

  const btnHandler = () => {
    props.history.push("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const titleVal = titRef.current.value;
    const bodyVal = bodyRef.current.value;
    if (titleVal !== "" && bodyVal !== "") {
      stateHandler({
        clicked: true,
      });
      const db = firebase.firestore();
      db.collection("Dynalink")
        .add({
          title: titleVal,
          body: bodyVal,
        })
        .then(function (docRef) {
          stateHandler({
            clicked: false,
            loaded: true,
            response: docRef.id,
          });
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <React.Fragment>
      {!user ? (
        <Redirect to="/login" />
      ) : (
        <React.Fragment>
          {props.match.params.user !== user.displayName.split(" ").join("") ? (
            <ErrorComp />
          ) : (
            <div className="LinkgenWrapper">
              {!state.loaded && !state.clicked ? (
                <form onSubmit={submitHandler}>
                  <div className="input-group">
                    <p>Give your form a title</p>
                    <input
                      required
                      ref={titRef}
                      className="input-title"
                    ></input>
                  </div>
                  <div className="input-group">
                    <p>Give your card some content</p>
                    <textarea
                      required
                      ref={bodyRef}
                      className="input-body"
                    ></textarea>
                  </div>
                  <button onClick={btnHandler}>Back</button>
                  <button type="submit">Submit</button>
                </form>
              ) : null}
              {state.clicked ? <Spinner /> : null}
              {state.loaded ? (
                <div className="result-div">
                  <a
                    className="result-link"
                    href={
                      window.location.origin + "/dynalink/" + state.response
                    }
                  >
                    {window.location.origin + "/dynalink/" + state.response}
                  </a>
                </div>
              ) : null}
              <button onClick={signOut}>Log out</button>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default withRouter(LinkGen);
