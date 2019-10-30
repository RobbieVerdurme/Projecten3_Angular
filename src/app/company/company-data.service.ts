import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Company } from './company';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private http: HttpClient, private router: Router) { }

  //Get all companies
  get Companies$(): Observable<Company[]>{
    return null;
  }

  //Get companie by id
  getCompany$(): Observable<Company>{
    return null;
  }

  //Add a company, id generated in backend
  addNewCompany(company: Company): BehaviorSubject<boolean>{
    return new BehaviorSubject<boolean>(true);
  }
  
  //modify a company
  editCompany(company: Company){
    return null;
  }

  //remove a company
  removeCompany(id){
    return null;
  }

}
