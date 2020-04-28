import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['login', 'signup']);
  }
}
