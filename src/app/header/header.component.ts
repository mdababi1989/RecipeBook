import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((response: Recipe[]) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthentificated(){
    return this.authService.isAuthenticated();
  }

}
