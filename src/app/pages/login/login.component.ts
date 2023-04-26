import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginResponse {
  acess_token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  showError = false;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post<LoginResponse>('http://localhost:3000/auth/login', credentials)
      .subscribe(
        (response) => {
          console.log(response);
          // Store the token in local storage
          localStorage.setItem('token', response.acess_token);
          // Navigate to the dashboard page
          this.router.navigate(['/dashboard']); // Navigate to the dashboard page
        },
        (error) => {
          console.log(error);
          this.showError = true;
          // TODO: Handle error
        }
      );
  }
}
