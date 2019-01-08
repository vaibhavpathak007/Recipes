import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from '../../../app/recipes/recipe.service';
import { recipe } from 'src/app/recipes/recipe.model';

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

  constructor(private route : ActivatedRoute, private router: Router, private recipeservice : RecipeService ) { }

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
    let name : string = '';
    let path : string = '';
    let desc : string = '';

    if(this.isEdit){

      name= this.selectedrecipe.name;
      path = this.selectedrecipe.imagePath;
      desc = this.selectedrecipe.description;

      if(this.selectedrecipe.ingredients){
          for(let recipe of this.selectedrecipe.ingredients){
            ingredientarray.push(
              new FormGroup({
                'name': new FormControl(recipe.name, Validators.required),
                'amount': new FormControl(recipe.amount, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]) 
              }));
          }
        }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(name, Validators.required),
      'imagePath' : new FormControl(path, Validators.required),
      'description' : new FormControl(desc, Validators.required),
      'ingredients' : ingredientarray
    });
    
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]\d*$/)]) 
    }));
  }

  saveRecipe(){
    if(this.isEdit){
      this.recipeservice.updateRecipe(this.id,this.recipeForm.value);
    }
    else{
      this.recipeservice.addRecipe(this.recipeForm.value);
    }
    this.cancelRecipe();
  }

  cancelRecipe(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
