import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BensMoveisService {
  private bensMoveisUrl = 'http://localhost:3000/bens-moveis';
  private ingressosUrl = 'http://localhost:3000/bens-moveis/ingresso';

  constructor(private http: HttpClient) {}


}
