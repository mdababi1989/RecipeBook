import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingForm: NgForm;
  subscriptions: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.subscriptions = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = data.editedIngredient;
          this.shoppingForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }else{
          this.editMode = false;
        }
      }
    );
  }

  onAddItem() {
    const value = this.shoppingForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(
        newIngredient));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    this.shoppingForm.reset();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onClear() {
    this.editMode = false;
    this.shoppingForm.reset();
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }
}
