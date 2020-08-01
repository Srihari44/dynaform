import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../../Services/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
import Spinner from "../Loader/Loader";
import ErrorComp from "../Error/Error404";
import "./FormReader.css";

const DynamicForm = (props) => {
  const [state, stateHandler] = useState({
    formData: null,
    loaded: false,
    error: false,
  });

  useEffect(() => {
    const db = firebase.firestore();
    const docRef = db.collection("forms").doc(props.match.params.id).collection('questions');
    docRef
      .get()
      .then(function (queryData) {
        if (queryData.empty) { stateHandler({ error: true, loaded: true }); }
        else {
         queryData.forEach((doc) => console.log(doc.data()));
         stateHandler({
           formData: queryData,
           loaded: true,
         }); 
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, [props.match.params.id]);

  return (
    <div className="DFormWrapper">
      {state.loaded && state.formData ? (
        <div className="Card">
          <h1 className="Card-title">{state.formData.name}</h1>
          <hr></hr>
          <p className="Card-body">{state.formData.createdby}</p>
        </div>
      ) : null}
      {!state.loaded ? <Spinner /> : null}
      {state.error ? <ErrorComp /> : null}
    </div>
  );
};

export default withRouter(DynamicForm);
