import React from "react";
import { Component } from "react";
import UserInput from "./Components/userInput";
import ValidationInput from "./Components/validationInput";
import CharContainer from "./Components/charContainer";
import "./App.css";

class App extends Component {
  state = {
    userName: "Abcd",
  };
  changeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  deleteHandeler = (key) => {
    const userNamesArr = Array.from(this.state.userName);
    userNamesArr.splice(key, 1);
    this.setState({
      userName: userNamesArr.join(""),
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeHandler} value={this.state.userName} />
        <ValidationInput text={this.state.userName} />
        <CharContainer
          charList={this.state.userName}
          deleted={this.deleteHandeler}
        />
      </div>
    );
  }
}
export default App;
