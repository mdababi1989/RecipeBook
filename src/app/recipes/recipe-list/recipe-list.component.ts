import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRecipes from '../store/recipes.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesState: Observable<fromRecipes.State>;

  constructor(private store: Store<fromRecipes.FeatureState>) {
  }

  ngOnInit(): void {
    this.recipesState = this.store.select('recipes');
  }

}
