import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';
import { recipe } from 'src/app/recipes/recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipeEl:recipe;
  id:number;

  constructor(private shoppingservice:ShoppingService, 
    private route : ActivatedRoute, 
    private router : Router,
    private recipeservice : RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.id = param['id'];
      this.recipeEl = this.recipeservice.getRecipeByIndex(this.id);
    });
  }

  onAddToShoppingList(){
    this.shoppingservice.addIngredients(this.recipeEl.ingredients);
  }

  editRecipeForm(){
    this.router.navigate(['edit'], {relativeTo:this.route});
    console.log(this.id);
  }

  deleteRecipe(){
    this.recipeservice.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
