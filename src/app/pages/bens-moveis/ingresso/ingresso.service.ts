import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingresso } from 'src/app/models/ingresso';

@Injectable({
  providedIn: 'root',
})
export class IngressoService {
  private createIngressosUrl =
    'http://localhost:3000/bens-moveis/create-ingresso';

  constructor(private http: HttpClient) {}

  createIngresso(ingresso: Ingresso): Observable<Ingresso> {
    return this.http.post<Ingresso>(this.createIngressosUrl, ingresso);
  }
}
