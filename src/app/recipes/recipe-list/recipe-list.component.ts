import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router , ActivatedRoute} from '@angular/router';

import { recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from '../recipe.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes : recipe[];
  listSubscription : Subscription;

  constructor(private rs:RecipeService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
   this.recipes = this.rs.getRecipesList();
   this.listSubscription = this.rs.recipeList.subscribe((recipes : recipe[])=>{
    this.recipes=recipes;
   });
  }

  newRecipeForm(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  ngOnDestroy(){
    this.listSubscription.unsubscribe();
  }

}
