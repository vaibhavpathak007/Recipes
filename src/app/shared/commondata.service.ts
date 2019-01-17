import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { map } from 'rxjs/Operators'
import { Http, Response } from "@angular/http";

import { recipe } from "src/app/recipes/recipe.model";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class CommonDataService {

    constructor(private recipeservice: RecipeService, private http: Http) { }

    fetchData() {
        return this.http.get("https://ng-recipe-book-98ef5.firebaseio.com/recipe.json")
        .pipe(map((response : Response)=>{
            let recipes : recipe[] = response.json();
            for(let recipe of recipes){
               if(!recipe.ingredients){
                console.log("no ingredient found for recipe : "+recipe.name);
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