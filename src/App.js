import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Homepage/Home";
import FormReader from "./Components/FormReader/FormReader";
import ErrorComp from "./Components/Error/Error404";
import Login from "./Components/Login/Login"
import UserProvider from "./Providers/UserProvider";
import "./App.css";
import FormBuilder from "./Components/FormBuilder/FormBuilder";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <h1>DynaForm</h1>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/:user/buildform" component={FormBuilder} />
          <Route path="/dynalink/:id" exact component={FormReader} />
          <Route component={ErrorComp} />
        </Switch>
        </UserProvider>
      </div>
  );
};
export default App;
