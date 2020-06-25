import React from "react";
import {Route, Switch} from 'react-router-dom'
import LinkGen from './Components/LinkGenerater/LinkGen'
import DynamicForm from './Components/DynamicForm/DynamicForm'
import "./App.css";

const App = () => {
    return (
      <div className="App">
          <h1>DynaForm</h1>
        <Switch>
        <Route path='/' exact component={LinkGen} />
        <Route path='/dynalink/:id' exact component={DynamicForm} />
        </Switch>
      </div>
    );
}
export default App;
