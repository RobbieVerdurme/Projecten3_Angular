import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, observable } from 'rxjs';
import { Company } from './company';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from '../user/authentication.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {
  public loadingError$ = new Subject<string>()
  private headers = new HttpHeaders();

  constructor(private http: HttpClient, private authentivationService: AuthenticationService) { }

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
    return this.http
      .get(`${environment.apiUrl}/Companies/${id}`)
      .pipe(map((rec: any): Company => Company.fromJSON(rec)));
  }

  //Add a company, id generated in backend
  addNewCompany(company: Company){
    return this.http.post(`${environment.apiUrl}/Companies`, company.toJSON());
  }
  
  //modify a company
  editCompany(company: Company){
    return this.http.put(`${environment.apiUrl}/Companies/edit`, company.toJSON(), {observe: 'response', headers: this.headers});
  }

  //remove a company
  removeCompany(id){
    return this.http.delete(`${environment.apiUrl}/Companies/${id}`, {observe: 'response', headers: this.headers});
  }

}
