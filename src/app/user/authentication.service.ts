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
  }
  this._user$ = new BehaviorSubject<LoginUser>(parsedToken && parsedToken.unique_name);
}

  // meth
  login(username: string, password: string): BehaviorSubject<boolean> {
    this._user$.next(new LoginUser(username, Role.Mulitmed));
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

  registerUser(photo: string, username: string, firstname: string, lastname: string, email: string, telephone: string, category: string): BehaviorSubject<boolean>  {
    return new BehaviorSubject<boolean>(true);
  }

  registerTherapist(photo: string, username: string, firstname: string, lastname: string, email: string, telephone: string, category:string): BehaviorSubject<boolean>  {
    return new BehaviorSubject<boolean>(true);
  }


  //GETTERS
  get user$(){
    return this._user$
  }

  isMultimed() {
    if(this.user$.value){
      return this._user$.value.role == Role.Mulitmed?true:false
    }
    return false;
  }
}