import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<HttpResponse<Category[]>>{
    let headers = new HttpHeaders();
    return this.httpClient.get<Category[]>(`${environment.apiUrl}/category`,{observe: 'response',headers: headers});
  }

  addNewCategory(category: string) {
    let headers = new HttpHeaders();
    return this.httpClient.post(`${environment.apiUrl}/category/add?category=`+ category, {observe: 'response', headers: headers});
  }
}
