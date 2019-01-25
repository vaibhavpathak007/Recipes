import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RecipeStarterComponent } from "src/app/recipes/recipe-starter/recipe-starter.component";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "src/app/recipes/recipe-details/recipe-details.component";

const recipeRoutes: Routes = [
    {path:'recipes', component: RecipesComponent, children:[
        {path:'', component: RecipeStarterComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailsComponent},
        {path:':id/edit', component: RecipeEditComponent}    
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule]
   })
export class RecipeRouting {

}