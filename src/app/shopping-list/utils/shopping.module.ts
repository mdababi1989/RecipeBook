import {NgModule} from '@angular/core';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {ShoppingEditComponent} from '../shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ShoppingRoutingModule} from './shopping-routing.module';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
  ]
})

export class ShoppingModule {

}
