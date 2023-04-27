import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface RegisterResponse {
  acess_token: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  showError = false;
  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const credentials = {
      username: this.name,
      email: this.email,
      password: this.password,
    };

    this.http
      .post<RegisterResponse>(
        'http://localhost:3000/auth/register',
        credentials
      )
      .subscribe(
        (response) => {
          console.log(response);
          alert('User created sucessfully');
          // Navigate to the login page
          this.router.navigate(['/login']); // Navigate to the dashboard page
        },
        (error) => {
          console.log(error);
          // TODO: Handle error
          this.showError = true;
        }
      );
  }
}
