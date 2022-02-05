import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
// 리덕스에 저장된 히스토리를 쓰기 위해
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { PostList, Login, Signup } from "../pages";
import Header from "../components/Header";
import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
