import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipeService/recipe.service';
import {map} from 'rxjs/operators';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    return this.httpClient.put('https://ng-recipe-book-513f0.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.get('https://ng-recipe-book-513f0.firebaseio.com/recipes.json?auth='+token)
      .pipe(map((response: Recipe[]) => {
        for (const recipe of response) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }
        return response;
      }))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
