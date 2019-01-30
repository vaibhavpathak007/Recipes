import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ShoppingService } from './shopping-list/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { CommonDataService } from 'src/app/shared/commondata.service';
import { ShoppingModule } from 'src/app/shopping-list/shopping.module';
import { HomeComponent } from './core/home/home.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShoppingModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingService, RecipeService, CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
