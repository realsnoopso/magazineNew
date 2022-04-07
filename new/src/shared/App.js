import './App.css';
import React from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore"

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Header from "../components/Header";
import {Grid, Button} from "../elements";


import { useSelector, useDispatch } from 'react-redux';
import {actionCreators as userActions} from "../redux/modules/user"

import {apiKey} from "./firebase"



function App() {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  console.log(useSelector((state) => state.user))
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true: false;

  React.useEffect(() => {
    if(is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, [])
  if (is_login && is_session) {
    return(
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup}/>
        </ConnectedRouter>
        <Button is_float text="글쓰기"></Button>
      </Grid>
    </React.Fragment>
    )
    
  } else {
    return (
      <React.Fragment>
        <Grid>
          <Header></Header>
          <ConnectedRouter history={history}>
            <Route path="/" exact component={PostList} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup}/>
          </ConnectedRouter>
        </Grid>
      </React.Fragment>
    );
  }
  
}

export default App;
