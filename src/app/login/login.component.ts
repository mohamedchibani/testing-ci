import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn: boolean;
  title: string;
  @Output() submitData: EventEmitter<User>;
  constructor() {
    this.isLoggedIn = false;
    this.submitData = new EventEmitter<User>();
    this.title = 'Hello World!';
  }

  login(email: string, password: string): void {
    this.isLoggedIn = !this.isLoggedIn;
    this.submitData.emit({ email, password });
  }

  get loginState(): string {
    return `User is ${this.isLoggedIn ? 'logged in' : 'logged out'}`;
  }
}
