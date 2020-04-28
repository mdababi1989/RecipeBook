import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipeService/recipe.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy{
  recipes: Recipe[];
  subscriptions: Subscription;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.subscriptions = this.recipeService.recipesChanged.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
