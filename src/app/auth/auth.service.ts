import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    // Verifica se o token JWT está presente no armazenamento local (local storage)
    const token = localStorage.getItem('token');
    // Verifica se o token expirou
    if (token) {
      const tokenExpirationDate = new Date(
        JSON.parse(atob(token.split('.')[1])).exp * 1000
      );
      return tokenExpirationDate > new Date();
    }
    return false;
  }
}
