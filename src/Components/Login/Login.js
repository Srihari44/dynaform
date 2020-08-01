import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { withRouter, Redirect } from "react-router-dom";
import { signInWithGoogle } from "../../Services/firebase";

const Login = () => {
  const user = useContext(UserContext);

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      {user ? (
        <Redirect to="/" />
      ) : (
        <div className="max-w-xs">
          <h2
            className="text-3xl font-semilight text-center mb-6"
          >
            Login now!
          </h2>

          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={formHandler}
          >
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(Login);
