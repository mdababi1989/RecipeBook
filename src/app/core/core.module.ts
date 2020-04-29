import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {AuthService} from "../auth/auth.service";
import {DataStorageService} from "../shared/data-storage.service";
import {ShoppingListService} from "../shopping-list/shoppingService/shopping-list.service";
import {RecipeService} from "../recipes/recipeService/recipe.service";
import {AuthGuardService} from "../auth/auth-guard.service";

@NgModule({
  declarations:[
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [AuthService, DataStorageService, ShoppingListService, RecipeService, AuthGuardService]
})

export class CoreModule {

}

