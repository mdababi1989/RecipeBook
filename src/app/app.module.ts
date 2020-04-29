import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RecipesModule} from './recipes/recipes.module';
import {ShoppingModule} from "./shopping-list/shopping.module";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./auth/auth.service";
import {DataStorageService} from "./shared/data-storage.service";
import {ShoppingListService} from "./shopping-list/shoppingService/shopping-list.service";
import {RecipeService} from "./recipes/recipeService/recipe.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RecipesModule,
    ShoppingModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, DataStorageService, ShoppingListService, RecipeService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
