import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}
  getRecipes(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
