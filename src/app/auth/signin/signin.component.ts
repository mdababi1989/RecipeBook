import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSignin(form: NgForm) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password, this.returnUrl);
  }
}
