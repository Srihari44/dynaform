import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  const [state, stateHandler] = useState({
    Ctime: 5,
    redirect: false,
  });

  useEffect(() => {
    if (!state.redirect) {
      setTimeout(function () {
        if (state.Ctime > 0) {
          stateHandler({ Ctime: state.Ctime - 1 });
        } else {
          stateHandler({ redirect: true });
        }
      }, 1000);
    }
  });

  return (
    <div className="error-Wrapper">
      <h1 className="error">404</h1>
      <h3>That's not found</h3>
      <p>Redirecting to home page in {state.Ctime} seconds</p>
      {state.redirect ? <Redirect to="/" /> : null}
    </div>
  );
};

export default Error404;
