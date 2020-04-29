import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

const recipesRoutes=[
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailsComponent, canActivate: [AuthGuardService]},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
  }
)
export class RecipesRoutingModule {

}
