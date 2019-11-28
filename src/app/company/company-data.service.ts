import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, observable } from 'rxjs';
import { Company } from './company';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {
  public loadingError$ = new Subject<string>()

  constructor(private http: HttpClient) { }

  //Get all companies
  get Companies$(): Observable<Company[]>{
    return this.http.get(`${environment.apiUrl}/Companies`)
      .pipe(
        catchError(error => {
          this.loadingError$.next(error.statusText);
          return null;
        }),
        map((list: any[]): Company[] => list.map(Company.fromJSON))
      );
  }

  //Get companie by id
  getCompany$(id): Observable<Company>{
    return null //Remove when api call works
    return this.http
      .get(`${environment.apiUrl}${id}`)
      .pipe(map((rec: any): Company => Company.fromJSON(rec)));
  }

  //Add a company, id generated in backend
  addNewCompany(company: Company){
    return this.http.post(`${environment.apiUrl}`, company.toJSON());
  }
  
  //modify a company
  editCompany(company: Company){
    return this.http.post(`${environment.apiUrl}`, company.toJSON());
  }

  //remove a company
  removeCompany(id){
    return this.http.delete(`${environment.apiUrl}${id}`);
  }

}
