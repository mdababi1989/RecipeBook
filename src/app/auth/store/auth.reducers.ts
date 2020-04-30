import * as AuthActions from './auth.actions';

export interface AppState {
  auth: State;
}

export interface State {
  user: { email: string, password: string };
  token: string;
  authentificated: boolean;

}

const initialState: State = {
  user: {email: null, password: null},
  token: null,
  authentificated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
return state;
}

