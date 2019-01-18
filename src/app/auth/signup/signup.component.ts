import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  ngOnInit() {
  }

  onSubmitForm(signupform : NgForm){
    const email = signupform.value.email;
    const pass = signupform.value.pass;
    console.log(email +" "+ pass);
    //this.authservice.signupUser(email,pass);
  }
}
