import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'recipes' , loadChildren:'./recipes/recipe.module#RecipeModule'}
];

@NgModule({
 imports:[RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})
export class AppRoutingModule{

}