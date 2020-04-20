import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingService/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('amountInput') amountInput;
  @ViewChild('nameInput') nameInput;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    this.shoppingListService.addIngredient(
      new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
