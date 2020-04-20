import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-recipe';
  navItem: string= 'recipes';


  navItemSet($event: string) {
    this.navItem = $event;
  }
}
