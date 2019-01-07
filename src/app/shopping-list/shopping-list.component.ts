import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingEditComponent } from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
 
  ingredients:Ingredient[]; 
  ingsubscription : Subscription;

  constructor(private shoppingservice:ShoppingService) { }

  ngOnInit() {
    this.ingsubscription = this.shoppingservice.ing.subscribe((ings:Ingredient[])=>{
      this.ingredients=ings;
    });
  }

  ngOnDestroy() {
    this.ingsubscription.unsubscribe();
  }

  selectIngredient(index : number){
    this.shoppingservice.selectedIngredientIndex.next(index);
  }

}
