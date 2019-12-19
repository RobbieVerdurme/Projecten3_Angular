import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, first } from 'rxjs/operators';
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

  addNewUser(firstname: string, lastname: string, email: string, telephone: string, category: string) {
    let headers = new HttpHeaders();
    let body = {
      firstName: firstname,
      familyName: lastname,
      email: email,
      phone: telephone,
      company: 1,
      categories: [],
      therapists: []
    }
    console.log(body)
    return this.http.post(`${environment.apiUrl}/users/add`, body, {observe: 'response', headers: headers});
  }

  editNormalUser(normalUser: NormalUser) {
    return this.http
      .put(`${environment.apiUrl}/users/edit`, normalUser.toJSON())
      .pipe();
  }

  removeUser(id){
    let headers = new HttpHeaders();
    return this.http.delete(`${environment.apiUrl}/users/delete/${id}`, {observe: 'response', headers: headers});
  }
}