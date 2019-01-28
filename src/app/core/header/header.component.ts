import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Response } from "@angular/http";

import { CommonDataService } from 'src/app/shared/commondata.service';
import { recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private commondataservice: CommonDataService, private recipeservice: RecipeService) { }

  ngOnInit() {
  }

  onSave() {
    this.commondataservice.saveData().subscribe((reponse: Response) => reponse.json());
  }

  onFetch() {
    this.commondataservice.fetchData();
  }

}
