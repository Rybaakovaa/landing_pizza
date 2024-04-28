import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private  authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }

}
