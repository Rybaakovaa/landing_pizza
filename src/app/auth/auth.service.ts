import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLogged = false;

  getToken() {
    return 'test';
  }

  logIn() {
    this.isLogged = true;
  }
  logOut () {
    this.isLogged = false;
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }
}
