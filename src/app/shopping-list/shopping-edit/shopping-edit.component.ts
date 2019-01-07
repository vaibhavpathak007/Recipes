import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { OnDestroy } from '@angular/core/';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { recipe } from 'src/app/recipes/recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy { 
  
  @ViewChild('f')
  form : NgForm
  isEdit : boolean;
  selectedIndex: number;
  selectedIngredient : Ingredient;
  selectedIngredientSub : Subscription;

  constructor(private shoppingservice:ShoppingService) { }

  ngOnInit() {
    this.shoppingservice.triggerEmmiter();

    this.selectedIngredientSub = this.shoppingservice.selectedIngredientIndex.subscribe((index)=>{
      this.selectedIndex = index;
      this.isEdit = true;
      this.selectedIngredient = this.shoppingservice.getIngredientAt(index);
      this.form.setValue({'iname':this.selectedIngredient.name, 'amount':this.selectedIngredient.amount});
    });
  }

  addIngredient(){
    if(this.isEdit){
      this.shoppingservice.updateingredient(this.selectedIndex, new Ingredient(this.form.value.iname, this.form.value.amount));
      console.log('updating');
    }
    else{
      this.shoppingservice.addIngredient(new Ingredient(this.form.value.iname, this.form.value.amount));
      console.log('adding');
    }
    this.form.reset();
    this.isEdit = false;
  }

  ngOnDestroy(){
    this.selectedIngredientSub.unsubscribe();
  }

  clearForm(){
    this.form.reset();
    this.isEdit = false;
  }

  deleteIngredient(){
    this.form.reset();
    this.shoppingservice.deleteIngredient(this.selectedIndex);
    this.isEdit=false;
  }

}
