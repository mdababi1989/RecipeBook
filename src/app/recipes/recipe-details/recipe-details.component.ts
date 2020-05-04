import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import {Observable} from 'rxjs';
import * as fromRecipes from '../store/recipes.reducers';
import {take} from 'rxjs/operators';
import * as RecipesActions from '../store/recipes.actions';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeState: Observable<fromRecipes.State>;
  index: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private store: Store<fromRecipes.FeatureState>) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.index = +params.id;
      this.recipeState = this.store.select('recipes');
    });
  }

  onAddToShoppingList() {
    this.store.select('recipes')
      .pipe(take(1))
      .subscribe((recipesState: fromRecipes.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(recipesState.recipes[this.index].ingredients));
      });
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.index));
    this.router.navigate(['/recipes']);
  }
}
