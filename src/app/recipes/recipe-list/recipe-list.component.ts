import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from '../recipe.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : recipe[];

  constructor(private rs:RecipeService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
   this.recipes = this.rs.getRecipesList();
  }

  recipeDetail(recipeEl : recipe){
    //this.rs.selectedRecipe.emit(recipeEl);
  }

  newRecipeForm(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }

}
