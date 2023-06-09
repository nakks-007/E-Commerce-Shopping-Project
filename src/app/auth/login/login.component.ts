import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  val : any[] = [];

constructor(public rtr : Router) {}

form : LoginForm = {
  email : '', 
  password : '',
};

// ngOnInIt()

submit() {
   this.val.push(this.form.email)
   localStorage.setItem("Tasks", JSON.stringify(this.val))
   this.rtr.navigate(["/"])
}


}
