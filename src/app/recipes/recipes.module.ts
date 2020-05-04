import { NgModule } from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesRoutingModule} from './recipes-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {recipesReducers} from './store/recipes.reducers';
import {EffectsModule} from '@ngrx/effects';
import {RecipesEffects} from './store/recipes.effects';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    NgbModule,
    StoreModule.forFeature('recipes', recipesReducers),
    EffectsModule.forFeature([RecipesEffects])
  ]
})
export class RecipesModule { }
