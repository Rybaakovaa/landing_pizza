import { Injectable } from '@angular/core';

@Injectable()
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
