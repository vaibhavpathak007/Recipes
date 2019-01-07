import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  navigateto:string = "recipes";

  onNavigate(navigateto: string){
    this.navigateto = navigateto;
  }

}
