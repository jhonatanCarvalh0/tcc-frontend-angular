import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingresso } from 'src/app/models/ingresso';

@Injectable({
  providedIn: 'root',
})
export class IngressoService {
  private url = 'http://localhost:3000/bens-moveis/ingresso';

  constructor(private http: HttpClient) {}

  criarIngresso(ingresso: Ingresso): Observable<Ingresso> {
    return this.http.post<Ingresso>(this.url, ingresso);
  }
}
