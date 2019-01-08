import { Component, OnInit } from '@angular/core';
import { recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeEl:recipe;

  constructor(private rec :RecipeService) { }

  ngOnInit() {
  }

}
