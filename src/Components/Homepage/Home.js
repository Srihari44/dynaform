import React, {  useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { withRouter, Redirect } from "react-router-dom";
import { signOut } from "../../Services/firebase"
import './Home.css'

const Home = (props) => {
    const user = useContext(UserContext);
    const btnhandler = () => {
        props.history.push(
          props.match.url + user.displayName.split(" ").join("") + "/buildform"
        );
    }
    return (
      <React.Fragment>
        {!user ? (
          <Redirect to="/login" />
        ) : (
          <div>
            <h1>Hello {user.displayName}</h1>
            <div>
              <button onClick={btnhandler}>Build my Form</button>
            </div>
            <div>
              <h2>Your forms</h2>
              <p>Oops nothing here</p>
            </div>
            <button onClick={signOut}>Logout</button>
          </div>
        )}
      </React.Fragment>
    );
}

export default withRouter(Home);
