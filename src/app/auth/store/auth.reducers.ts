import * as AuthActions from './auth.actions';

export interface AppState {
  auth: State;
}

export interface State {
  token: string;
  authentificated: boolean;

}

const initialState: State = {
  token: null,
  authentificated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state, authentificated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state, token: null, authentificated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
