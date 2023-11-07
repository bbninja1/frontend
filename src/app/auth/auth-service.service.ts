import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  signUp (username : string, password : string, firstname : string, lastname : string)
  {
    this.http.post('https://localhost:3000/api/user/signup',{username: username, firstname: firstname, lastname : lastname , 
    password : password}).subscribe(response =>{});
  }


  login (username : string, password : string)
  {
  this.http.post<{token: string}>('https://localhost:3000/api/auth',
  {username:username, password:password}).subscribe(response =>{
    const token = response.token;
    localStorage.setItem('token', token);
  });
  }
  
  getToken ()
  {
    return localStorage.getItem('token');
  }

}
