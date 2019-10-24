import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Role } from './role';
import { LoginUser } from './loginuser';
import { Router } from '@angular/router';

// parce jwt token to json
function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

@Injectable({
  providedIn: 'root'
})
// Sends requests to the server to login
export class AuthenticationService {
  // var
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<LoginUser>;
  public redirectUrl: string;

  // constr
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
    }
    this._user$ = new BehaviorSubject<LoginUser>(new LoginUser(parsedToken.username, parsedToken.role));
  }else{
    this._user$ = new BehaviorSubject<LoginUser>(parsedToken && parsedToken.username && parsedToken.role);
  }
  
}

  // meth
  login(username: string, password: string): BehaviorSubject<boolean> {
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJTb2ZpZVYiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGUiOiJNdWx0aW1lZCJ9.JaTZOA1TJoFDATM4Tr3vCsFFHtRNd4sHYAoWjPvj-3w";
    localStorage.setItem(this._tokenKey, token);
    const parsedToken = parseJwt(token);
    this._user$.next(new LoginUser(username, parsedToken.role));
    return new BehaviorSubject<boolean>(true);
    /*
    return this.http
      .post(`${environment.apiUrl}/login`, {username, password}, { responseType: 'text' })
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            const parsedToken = parseJwt(token);
            //de juiste gebruiker aanmaken aan de hand van de role
            /*
            if(parsedToken.roles == Role.Mulitmed){
              this._user$.next(new Multimed(username, parsedToken.roles))
            }else{
              this._user$.next(new Therapist(username, parsedToken.roles))
            }
        
            return true;
          } else {
            return false;
          }
        })
      );*/
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem(this._tokenKey);
      this._user$.next(null);
      this.router.navigate(['/login']);
    }
  }

  registerUser(photo: string, username: string, firstname: string, lastname: string, email: string, telephone: string, category: string): BehaviorSubject<boolean>  {
    return new BehaviorSubject<boolean>(true);
  }

  registerTherapist(photo: string, username: string, firstname: string, lastname: string, email: string, telephone: string, website:string, workingHours:string, category:string): BehaviorSubject<boolean>  {
    return new BehaviorSubject<boolean>(true);
  }


  //GETTERS
  get user$(){
    return this._user$
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    if(localToken){
      let parsedToken = parseJwt(localToken);
      this._user$.next(new LoginUser(parsedToken.username, parsedToken.role));
      return localToken;
    }
    return '';
  }

  isMultimed() {
    if(this.user$.value){
      return this._user$.value.role == Role.Mulitmed?true:false
    }
    return false;
  }
}