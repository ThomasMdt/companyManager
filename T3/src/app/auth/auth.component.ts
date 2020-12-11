import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  username: string;
  password: string;

  constructor(private authService: AuthService ) {}

  login() {
    const { username , password } = this;
    return this.authService.login({ username, password });
  }

}
