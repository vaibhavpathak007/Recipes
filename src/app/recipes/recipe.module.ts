import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RecipeListComponent } from "src/app/recipes/recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "src/app/recipes/recipe-details/recipe-details.component";
import { RecipeItemComponent } from "src/app/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeStarterComponent } from "src/app/recipes/recipe-starter/recipe-starter.component";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";
import { RecipeRouting } from "src/app/recipes/recipe-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeStarterComponent,
        RecipeEditComponent
    ],
    imports: [
        RecipeRouting,
        SharedModule
    ]
})
export class RecipeModule {

}