import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipeService/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input('selectedRecipeDetails') selectedRecipeDetails: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    console.log('clicked');
    this.recipeService.addIngredientToShoppingList(this.selectedRecipeDetails.ingredients);
  }
}
