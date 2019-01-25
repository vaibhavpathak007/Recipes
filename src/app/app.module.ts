import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingService } from './shopping-list/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { CommonDataService } from 'src/app/shared/commondata.service';
import { RecipeModule } from 'src/app/recipes/recipe.module';
import { ShoppingModule } from 'src/app/shopping-list/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RecipeModule,
    ShoppingModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ShoppingService, RecipeService, CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
