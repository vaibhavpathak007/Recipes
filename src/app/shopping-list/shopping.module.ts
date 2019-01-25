import { NgModule } from "@angular/core";

import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "src/app/shopping-list/shopping-edit/shopping-edit.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ShoppingRoutingModule } from "src/app/shopping-list/shopping-routing.module";

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        SharedModule,
        ShoppingRoutingModule
    ]
})
export class ShoppingModule{

}