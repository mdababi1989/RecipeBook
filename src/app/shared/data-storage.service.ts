import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {RecipeService} from '../recipes/recipeService/recipe.service';
import {map} from 'rxjs/operators';
import {Recipe} from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    /*return this.httpClient.put('https://ng-recipe-book-513f0.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {
        params: new HttpParams().set('auth', token)
      });*/
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-513f0.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {
        reportProgress: true
      });
    return this.httpClient.request(req);
  }

  fetchRecipes() {
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-513f0.firebaseio.com/recipes.json')
  .pipe(map(recipes => {
      for (const recipe of recipes) {
        if (!recipe.ingredients) {
          recipe.ingredients = [];
        }
      }
      return recipes;
    }))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
