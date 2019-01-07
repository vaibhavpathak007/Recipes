import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../../../app/recipes/recipe.service';
import { recipe } from 'src/app/recipes/recipe.model';
import {  } from '@angular/forms/';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  isEdit : boolean = false;
  recipeForm : FormGroup;
  selectedrecipe : recipe;

  constructor(private route : ActivatedRoute, private recipeservice : RecipeService ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{ 
      this.id=params['id'];
      this.isEdit = params['id'] != null
      console.log(this.isEdit);
      this.initializeForm();
    });
  }

  initializeForm(){

    this.selectedrecipe = this.recipeservice.getRecipeByIndex(this.id);
    let ingredientarray = new FormArray([]);

    if(!this.isEdit){
      this.recipeForm = new FormGroup({
        'name' : new FormControl(null),
        'path' : new FormControl(null),
        'desc' : new FormControl(null)
      });
    }
    else{
      if(this.selectedrecipe.ingredients){
          for(let recipe of this.selectedrecipe.ingredients){
            ingredientarray.push(
              new FormGroup({
                'ingredient': new FormControl(recipe.name),
                'amount': new FormControl(recipe.amount) 
              })
            );
          }
        }
      this.recipeForm = new FormGroup({
        'name' : new FormControl(this.selectedrecipe.name),
        'path' : new FormControl(this.selectedrecipe.imagePath),
        'desc' : new FormControl(this.selectedrecipe.description),
        'ingredients' : ingredientarray
      });
    }
    
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'ingredient': new FormControl(),
      'amount': new FormControl() 
    }));
  }

}
