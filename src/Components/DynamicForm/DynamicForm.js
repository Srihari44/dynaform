import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../../Services/firebaseConfig";
import firebase from "@firebase/app";
import "@firebase/firestore";
import Spinner from '../Loader/Loader'
import "./DynamicForm.css";

const DynamicForm = (props) => {
  const [state, stateHandler] = useState({
    formData: null,
    loaded: false
  });

  useEffect(() => {
    const db = firebase.firestore();
    const docRef = db.collection("Dynalink").doc(props.match.params.id);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          stateHandler({
            formData: doc.data(),
            loaded: true
          });
        } else {
          // doc.data() will be undefined in this case
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, [props.match.params.id]);

  return (
    <div className='Wrapper'>
      {state.loaded ? (
        <div className='Card'>
          <h1 className='Card-title'>{state.formData.title}</h1>
          <hr></hr>
          <p className='Card-body'>{state.formData.body}</p>
        </div>
      ) : <Spinner />}
    </div>
  );
};

export default withRouter(DynamicForm);
