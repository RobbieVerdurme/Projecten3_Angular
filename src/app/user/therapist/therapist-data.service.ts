import { Injectable } from '@angular/core';
import { Therapist } from './Therapist';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NormalUser } from '../normal-user/NormalUser';
import { TherapistType } from './TherapistType';

@Injectable({
  providedIn: 'root'
})
export class TherapistDataService {
  public loadingError$ = new Subject<string>();
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) { }

  get therapists$(): Observable<Therapist[]> {
    return this.http.get(`${environment.apiUrl}/therapist/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): Therapist[] => list.map(Therapist.fromJSON))
    );
  }

  getTherapist$(id): Observable<Therapist> {
    return this.http
      .get(`${environment.apiUrl}/therapist/${id}`)
      .pipe(map((the: any): Therapist => Therapist.fromJSON(the)));
  }

  getTherapistClients$(id): Observable<NormalUser[]>{
      return this.http.get(`${environment.apiUrl}/therapist/clients/${id}`).pipe(
        catchError(error => {
          this.loadingError$.next(error.statusText);
          return of(null);
        }),
        map((list: any[]): NormalUser[] => list.map(NormalUser.FromJSON))
      );
  }

  addNewTherapist(therapist: Therapist) {
    return this.http.post(`${environment.apiUrl}/therapist/add`, therapist.toJSON(), {observe: 'response', headers: this.headers});
  }

  editTherapist(therapist: Therapist) {
    return this.http
      .put(`${environment.apiUrl}/therapist/edit`, therapist.toJSON(), {observe: 'response', headers: this.headers})
      .pipe();
  }

  removeTherapist(id){
    return this.http.delete(`${environment.apiUrl}/therapist/${id}`, {observe: 'response', headers: this.headers});
  }

  get TherapistTypes$(): Observable<TherapistType[]>{
    return this.http.get(`${environment.apiUrl}/therapist/type`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): TherapistType[] => list.map(TherapistType.fromJSON))
    );
  }

}
