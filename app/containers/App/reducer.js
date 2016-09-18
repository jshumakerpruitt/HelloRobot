/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  RECEIVE_TOKEN,
  REVOKE_TOKEN,
  SET_REDIRECT,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  token: '',
  loading: false,
  error: false,
  currentUser: false,
  redirectPath: '',
  userData: fromJS({
    repositories: false,
  }),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return state
        .set('token', action.token)
        .set('redirectPath', '');
    case REVOKE_TOKEN:
      return state
        .set('token', '');
    case SET_REDIRECT:
      return state
        .set('redirectPath', action.path);
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
