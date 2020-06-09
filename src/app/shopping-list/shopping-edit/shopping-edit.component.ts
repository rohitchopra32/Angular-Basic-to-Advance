import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  edit = false;
  index: number;
  editedItem: Ingredient;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.sttartedEditing.subscribe((index: number) => {
      this.edit = true;
      this.index = index;
      this.editedItem = this.shoppinglistService.getIngredient(index);
      this.shoppingListForm.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount
      })
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.edit = false;
  }
  onDelete() {
    this.onClear();
    this.shoppinglistService.deleteIngredient(this.index);
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ing = new Ingredient(value.name, value.amount)
    if (this.edit) {
      this.shoppinglistService.updateIngredient(this.index, ing);
    } else {
      this.shoppinglistService.addIngredient(ing);
    }
    this.shoppingListForm.reset();
    this.edit = false;
    return false
  }
}
