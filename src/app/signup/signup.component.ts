import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authservice: AuthServiceService , private router: Router) {}

  ngOnInit(): void {
  }
  onSignUp(SignUp: NgForm)
  {
 if (SignUp.invalid)
 {
  return;
 }

 this.authservice.signUp(
  SignUp.value.enteredusername, 
  SignUp.value.enteredfirstname, 
  SignUp.value.enteredlastname, 
  SignUp.value.enteredpassword 
  )
  
  this.router.navigate(['/app-login']);
  }

}
