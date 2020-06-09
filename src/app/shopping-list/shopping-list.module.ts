import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shppinglist-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ShoppingListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
})
export class ShoppingListModule {}
