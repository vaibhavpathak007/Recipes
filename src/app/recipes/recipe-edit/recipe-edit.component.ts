import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../../app/recipes/recipe.service';
import { FormControl } from '@angular/forms';
import { recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  isEdit : boolean = false;
  editForm : FormGroup;
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

    if(!this.isEdit){
      this.editForm = new FormGroup({
        'name' : new FormControl(null),
        'path' : new FormControl(null),
        'desc' : new FormControl(null)
      });
    }
    else{
      this.editForm = new FormGroup({
        'name' : new FormControl(this.selectedrecipe.name),
        'path' : new FormControl(this.selectedrecipe.imagePath),
        'desc' : new FormControl(this.selectedrecipe.description)
      });
    }
    
  }

}
