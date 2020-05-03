import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {fromPromise} from 'rxjs/internal-compatibility';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.action$
    .pipe(ofType(AuthActions.TRY_SIGNUP))
    .pipe(
      map((action: AuthActions.TrySignUp) => {
        return action.payload;
      }),
      switchMap(
        (authData: { username: string, password: string }) => {
          return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }
      ),
      switchMap(
        () => {
          return fromPromise(firebase.auth().currentUser.getIdToken());
        }
      ),
      mergeMap(
        (token: string) => {
          return [
            {type: AuthActions.SIGNUP},
            {type: AuthActions.SET_TOKEN, payload: token}
          ];
        }
      )
    );

  @Effect()
  authSignIn = this.action$
    .pipe(ofType(AuthActions.TRY_SIGNIN))
    .pipe(
      map((action: AuthActions.TrySignIN) => {
        return action.payload;
      }),
      map(
        (authData: { username: string, password: string }) => {
          return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        }
      ),
      switchMap(
        () => {
          return fromPromise(firebase.auth().currentUser.getIdToken());
        }
      ),
      mergeMap(
        (token: string) => {
          const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
          this.router.navigate([returnUrl]);
          return [
            {type: AuthActions.SIGNIN},
            {type: AuthActions.SET_TOKEN, payload: token}
          ];
        }
      )
    );

  @Effect({dispatch: false})
  authLogout = this.action$
    .pipe(ofType(AuthActions.LOGOUT))
    .pipe(
      tap(
        () => {
          this.router.navigate(['/']);
        }
      )
    );

  constructor(private route: ActivatedRoute, private router: Router, private action$: Actions) {}
}
