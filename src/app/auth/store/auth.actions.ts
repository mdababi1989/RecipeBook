import {Action} from '@ngrx/store';

export const SIGNUP = 'SIGHUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class SignUp implements Action{
  readonly type: string = SIGNUP;
}

export class SignIn implements Action{
  readonly type: string = SIGNIN;
}

export class LogOut implements Action{
  readonly type: string = LOGOUT;
}

export class SetToken implements Action{
  readonly type: string = SET_TOKEN;
  constructor(public payload: string) {
  }

}


export type AuthActions = SignUp | SignIn | LogOut | SetToken;
