import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { map } from 'rxjs/Operators'
import { Http, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";

import { recipe } from "src/app/recipes/recipe.model";

@Injectable()
export class CommonDataService {

    constructor(private recipeservice: RecipeService, private http: HttpClient) { }

    fetchData() {
        return this.http.get("https://ng-recipe-book-98ef5.firebaseio.com/recipe.json")
        .pipe(map((recipes : recipe[])=>{
            for(let recipe of recipes){
               if(!recipe.ingredients){
                recipe.ingredients=[];
               } 
            }
            return recipes; 
        }))
        .subscribe((recipes : recipe[])=>{
            this.recipeservice.setRecipes(recipes);
        });
    }

    saveData() {
        return this.http.put("https://ng-recipe-book-98ef5.firebaseio.com/recipe.json", this.recipeservice.getRecipesList())
    }

}