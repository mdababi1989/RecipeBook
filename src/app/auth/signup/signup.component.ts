import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
  }

  onSignup() {
    const userEmail = this.form.value.email;
    const userPassword = this.form.value.password;
    // const confirmPassword = this.form.value.confirmPassword;
    this.store.dispatch(new AuthActions.TrySignUp({username: userEmail, password: userPassword}));
  }

  checkPasswords() {
    const pass = this.form.value.password;
    const confirmPass = this.form.value.confirmPassword;
    return pass === confirmPass ? null : {notSame: true};
  }
}
