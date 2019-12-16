import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { NormalUser } from './NormalUser';

@Injectable({
  providedIn: 'root'
})
export class NormalUserDataService {

  public loadingError$ = new Subject<string>();
  constructor(private http: HttpClient) { }

  get normalUsers$(): Observable<NormalUser[]> {
    return this.http.get(`${environment.apiUrl}/users/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): NormalUser[] => list.map(NormalUser.FromJSON))
    );
  }

  getNormalUser$(id): Observable<NormalUser> {
    return this.http
      .get(`${environment.apiUrl}/users/details/${id}`)
      .pipe(map((the: any): NormalUser => NormalUser.FromJSON(the)));
  }

  addNewUser(normalUser: NormalUser) {
    return this.http.post(`${environment.apiUrl}/users/add`, normalUser.toJSON());
  }
  editNormalUser(normalUser: NormalUser) {
    return this.http
      .put(`${environment.apiUrl}/users/edit`, normalUser.toJSON())
      .pipe();
  }
}
