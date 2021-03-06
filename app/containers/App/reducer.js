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
  OPEN_NAV,
  CLOSE_NAV,
} from './constants';
import { fromJS } from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

// The initial state of the App
const initialState = fromJS({
  isNavOpen: false,
  token: '',
  loading: false,
  error: false,
  currentUser: false,
  userData: fromJS({
    repositories: false,
  }),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.global || state;
    case RECEIVE_TOKEN:
      return state
        .set('token', action.token);
    case REVOKE_TOKEN:
      return state
        .set('token', '');
    case OPEN_NAV:
      return state
        .set('isNavOpen', true);
    case CLOSE_NAV:
      return state
        .set('isNavOpen', false);
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
