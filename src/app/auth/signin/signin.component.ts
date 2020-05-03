import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onSignin(form: NgForm) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.store.dispatch(new AuthActions.TrySignIN({username: form.value.email,  password: form.value.password}));
  }
}
