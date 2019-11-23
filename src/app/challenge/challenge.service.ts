import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Challenge } from './Challenge';
import { map } from 'rxjs/operators';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private readonly baseurl: String = "https://projecten3backend20191106111602.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) { }

  addChallenge(title: String, description: String, category: Category): Observable<HttpResponse<Object>>{
    let headers = new HttpHeaders();
    let body = {
      title: title,
      description: description,
      category: category
    };
    return this.httpClient.post(`${this.baseurl}/challenge/add`,body,{observe: 'response',headers: {"Access-Control-Allow-Origin":"*"}});
  }
}
