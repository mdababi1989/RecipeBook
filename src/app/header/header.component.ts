import { Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private dataStorageService: DataStorageService, public authService: AuthService,
              private router: Router) {
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
    this.router.navigate(['/']);
  }
}
