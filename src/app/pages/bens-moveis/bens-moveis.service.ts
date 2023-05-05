import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BensMoveisService {
  private findAllURL = 'http://localhost:3000/bens-moveis/find-all';


  constructor(private http: HttpClient) {}


  findAll() {
    return this.http.get(this.findAllURL);
  }
}
