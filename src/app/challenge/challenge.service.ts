import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Challenge } from './Challenge';
import { map, catchError } from 'rxjs/operators';
import { Category } from './Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  public loadingError$ = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  addChallenge(challenge: Challenge){
    let headers = new HttpHeaders();
    return this.httpClient.post(`${environment.apiUrl}/challenge/add`,challenge.toJSONForAdd(), {observe: 'response', headers: headers});
  }

  assignChallenges(userId: number, challenges: Array<number>){
    let headers = new HttpHeaders();
    let body = {
      UserId: userId,
      challengeIds: challenges
    };

    return this.httpClient.post(`${environment.apiUrl}/challenge/user/add`,body, {observe: 'response',headers: headers});
  }

  getChallengesForUserPerCategory(id: number){
    let headers = new HttpHeaders();
    return this.httpClient.get<Challenge[]>(`${environment.apiUrl}/challenge/category/user/${id}`,{observe: 'response',headers: headers});
  }

  getChallengesForUser$(id: number): Observable<Challenge[]>{
    return this.httpClient
    .get<Challenge[]>(`${environment.apiUrl}/challenge/user/${id}`)
    .pipe(
      map(
        (list: any[]): Challenge[] => list.map(
          (challenge: any): Challenge => Challenge.fromJSON(challenge))
      )
    );
  }
}
