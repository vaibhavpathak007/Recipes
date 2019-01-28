import { NgModule } from "@angular/core";

import { HomeComponent } from "src/app/core/home/home.component";
import { HeaderComponent } from "src/app/core/header/header.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule // to work routing in header cause app.module
    ],                   // is now separete from core module
    exports:[HeaderComponent]
})
export class CoreModule {

}