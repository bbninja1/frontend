import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(public authservice: AuthServiceService , private router: Router) {}

   ngOnInit(): void {
  }

  onLogin(loginForm: NgForm)
   {
  if (loginForm.invalid)
  {
   return;
  }

  this.authservice.login(loginForm.value.enteredusername, loginForm.value.enteredpassword)
  this.router.navigate(['/app-posts']);
  }
}
