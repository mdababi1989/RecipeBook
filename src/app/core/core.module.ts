import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {AuthService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';
import {RecipeService} from '../recipes/recipeService/recipe.service';
import {AuthGuardService} from '../auth/auth-guard.service';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    NgbDropdownModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [AuthService, DataStorageService, RecipeService, AuthGuardService]
})

export class CoreModule {

}

