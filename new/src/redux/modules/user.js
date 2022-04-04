import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
// proxy와 연관, immer는 A라는 것을 받아다가 A 다시를 만들어버림. 불변성 신경 안써도 되는 것.

import {setCookie} from "../../shared/Cookie"

// action
const LOG_IN ="LOG_IN";
const LOG_OUT ="LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

// initialState
const initialState = {
  user: null,
  is_login: false,
}

// middleware actions
const loginAction = (user) => {
  return function (dispatch, getState, {history}) {
    console.log(logIn(user));
    history.push('/');
  }
}

export default handleActions({
  [LOG_IN]: (state, action) => produce(state, (draft)=>{
    setCookie("is_login", "success");
    draft.user = action.payload.user;
    draft.is_login = action.payload.user;
  }),
  [LOG_OUT]: (state, action) => produce(state, (draft)=>{}),
  [GET_USER]: (state, action) => produce(state, (draft)=>{}),
  }, 
initialState
);


const actionCreators = {
  logIn,
  getUser,
  logOut,
};

export { actionCreators };
