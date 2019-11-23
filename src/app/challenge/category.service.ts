import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './Category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseurl: String = "https://projecten3backend20191106111602.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.httpClient.get(`${this.baseurl}/category`,{headers: {"Access-Control-Allow-Origin":"*"}}).pipe(
      map((list: any[]): Category[] => {
        if(!list){
          return null;
        }else{
          return list.map(Category.fromJSON);
        }
      })
    );
  }
}
