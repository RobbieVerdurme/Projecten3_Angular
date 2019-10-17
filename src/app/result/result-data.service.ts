import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Result } from './result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultDataService {
  //var
  public loadingError$ = new Subject<string>();

  //ctor
  constructor(
    private http: HttpClient
  ) { }

  //methods
  get results$():Observable<Result[]>{
    return ;
    /*
    return this.http.get(`${environment.apiUrl}/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      map((list: any[]): Result[] => list.map(Result.fromJSON),
    ));
    */
  }
}
