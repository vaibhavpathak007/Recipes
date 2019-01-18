import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// import * as firebase from 'firebase-tools';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  navigateto:string = "recipes";

  ngOnInit(){
    // firebase.initializeApp({
    //   apiKey: "AIzaSyDNrNLPX3lQCgzIrE1a5v-_FdB_OEYgnJs",
    //   authDomain: "ng-recipe-book-98ef5.firebaseapp.com"
    // });
  }

  onNavigate(navigateto: string){
    this.navigateto = navigateto;
  }

}
