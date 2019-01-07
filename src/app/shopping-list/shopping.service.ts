import { Ingredient } from "../shared/ingredient.model";
import { Output, EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subject } from "rxjs";

export class ShoppingService{


    private ingredients:Ingredient[] = [
        new Ingredient('Apple',50),
        new Ingredient('Tomatos',20)
      ]; 
      
      ing = new Subject<Ingredient[]>();
      selectedIngredientIndex = new Subject<number>()
      
      triggerEmmiter() {
        this.ing.next(this.ingredients);
      }

      addIngredient(ing:Ingredient){
        this.ingredients.push(ing);
      }

      addIngredients(ings:Ingredient[]){
      this.ingredients.push(...ings);
      }

      getIngredientAt(index: number): Ingredient {
        return this.ingredients[index];
      }

      updateingredient(index : number, newing : Ingredient){
        this.ingredients[index] = newing;
      }

      deleteIngredient(index: number) {
        this.ingredients.splice(index,1)
      }
}