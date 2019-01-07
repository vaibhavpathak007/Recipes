import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RouterModule } from "@angular/router";
import { RecipeStarterComponent } from "./recipes/recipe-starter/recipe-starter.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component: RecipesComponent, children:[
        {path:'', component: RecipeStarterComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailsComponent},
        {path:':id/edit', component: RecipeEditComponent}    
    ]},
    {path:'shopping', component: ShoppingListComponent}
];

@NgModule({
 imports:[RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})
export class AppRoutingModule{

}