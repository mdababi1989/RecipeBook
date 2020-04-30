import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipeService/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = +params.id;
      if (this.index < this.recipeService.getRecipes().length) {
        this.recipe = this.recipeService.getRecipes()[this.index];
      }
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }
}
