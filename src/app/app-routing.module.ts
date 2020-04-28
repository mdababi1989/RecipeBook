import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {SignComponent} from './auth/sign/sign.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailsComponent, canActivate: [AuthGuardService]},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'login', component: SignComponent, children: [
      {path: 'signup', component: SignupComponent},
      {path: '', component: SigninComponent}
    ]
  }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  }
)

export class AppRoutingModule {

}
