import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDX5o-Jvz2Z_Sbqg9h3qmjrPmtEB3KO6K4',
      authDomain: 'ng-recipe-book-513f0.firebaseapp.com'
    });
  }
}
