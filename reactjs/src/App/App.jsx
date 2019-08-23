import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import { LoginPage1 } from "../LoginPage/LoginPage1";
import { Loginirsat } from "../LoginPage/Loginirsat";

import { Main } from "../Main/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" exact component={Loginirsat} />
          <Route path="/main" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
