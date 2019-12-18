import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from './Category';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public loadingError$ = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  get categories$(): Observable<Category[]>{
    return this.httpClient
    .get<Category[]>(`${environment.apiUrl}/category`)
    .pipe(
      catchError(error => {
        this.loadingError$.next("Kon de categorieën niet ophalen.");
        return null;
      }),
      map((list: any[]): Category[] => list
        .map((category: any): Category => Category.fromJSON(category))
      )
    );
  }
}
