import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private  authService: AuthService) { }

  public loggedState: boolean = false;

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn();
    this.loggedState = true;
  }

  logout() {
    this.authService.logOut();
    this.loggedState = false;
  }

}
