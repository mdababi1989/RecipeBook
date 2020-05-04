import {Actions, Effect, ofType} from '@ngrx/effects';
import * as RecipesActions from '../store/recipes.actions';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromRecipes from '../store/recipes.reducers';
import {Recipe} from '../recipe.model';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipesEffects {
  @Effect()
  fetchRecipes = this.action$
    .pipe(ofType(RecipesActions.FETCH_RECIPES))
    .pipe(
      switchMap(
        (action: RecipesActions.FetchRecipes) => {
          return this.httpClient.get<Recipe[]>('https://ng-recipe-book-513f0.firebaseio.com/recipes.json');
        }
      ),
      map(
        recipes => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return {
            type: RecipesActions.SET_RECIPES,
            payload: recipes
          };
        }
      )
    );

  @Effect({dispatch: false})
  storeRecipes = this.action$
    .pipe(ofType(RecipesActions.STORE_RECIPES))
    .pipe(
      withLatestFrom(this.store.select('recipes')),
      switchMap(
        ([action, state]) => {
          const req = new HttpRequest('PUT', 'https://ng-recipe-book-513f0.firebaseio.com/recipes.json',
            state.recipes, {
              reportProgress: true
            });
          return this.httpClient.request(req);
        }
      )
    );

  constructor(private action$: Actions, private store: Store<fromRecipes.FeatureState>,
              private httpClient: HttpClient) {
  }

}
