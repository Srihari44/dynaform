import React, { Component, createContext } from "react";
import { auth } from "../Services/firebase";
import Loader from '../Components/Loader/Loader'
export const UserContext = createContext({ user: {} });
class UserProvider extends Component {
  state = {
    user: {},
    isLoading: true  };

  componentDidUpdate = () => {

  };

  componentDidMount = () => {
    auth.onAuthStateChanged(
      (userAuth) => {
        this.setState({ user: userAuth, isLoading: false })
      }
    )
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.state.isLoading ? <Loader/> : this.props.children}
      </UserContext.Provider>
    );
  }
}

export default React.memo(UserProvider);
