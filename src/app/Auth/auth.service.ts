import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './user.model';
import { ApiEndPoints } from '../helpers/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {

  }

  createUser(user: User) {
    console.log(user);
    this.http.post
      (ApiEndPoints.REGISTER, user).subscribe(res => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
      });
  }

  login(email: string, password: string) {
    const user: User = {
      email: email,
      password: password
    };

    this.http.post
      (ApiEndPoints.LOGIN, user).subscribe(res => {
        this.router.navigate(['/']);
      }, err => {
        this.isLoggedIn = false;
        console.log(err);
      });
  }
}
