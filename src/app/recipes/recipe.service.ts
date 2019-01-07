import { recipe } from "./recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";

export class RecipeService {
    private recipes : recipe[] = [
        new recipe(
            'Burger',
            'simple Burger',
            'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BUR1678-BBQ-Bacon-thumbnail-500x400-v01_0.png',
            [new Ingredient('Bun',2),new Ingredient('Tikki',1)],  
        ),
        new recipe(
            'French Fries',
            'Simple French Frice',
            'https://media.istockphoto.com/photos/french-fries-on-white-background-picture-id604378894?k=6&m=604378894&s=612x612&w=0&h=Nyeqq1-vt9q2GqE25wooeCAcZeelJyFULXZoEAi1ux0=',
            [new Ingredient('Potatos',3),new Ingredient('salt',1)]
        )
      ];
    
 

    getRecipesList(){
        return this.recipes.slice(); // to pass duplicate copy not original
    }

    getRecipeByIndex(index : number){
        return this.recipes[index];
    }
}