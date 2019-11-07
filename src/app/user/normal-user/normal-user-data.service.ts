import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

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
      map((list: any[]): NormalUser[] => list.map(NormalUser.fromJSON))
    );
  }

  getNormalUser$(id): Observable<NormalUser> {
    return this.http
      .get(`${environment.apiUrl}/users/${id}`)
      .pipe(map((the: any): NormalUser => NormalUser.fromJSON(the)));
  }

  addNewUser(normalUser: NormalUser) {
    return this.http.post(`${environment.apiUrl}/users/add`, normalUser.toJSON());
  }
  editTherapist(normalUser: NormalUser) {
    return this.http
      .put(`${environment.apiUrl}/therapist/edit`, normalUser.toJSON())
      .pipe();
  }
}
