import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";

let routes : Routes = [{path:'shopping', component: ShoppingListComponent}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ShoppingRoutingModule {

}