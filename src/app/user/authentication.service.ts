import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Role } from './role';
import { LoginUser } from './loginuser';
import { Router } from '@angular/router';
import { Therapist } from './therapist/Therapist';
import { Multimed } from './Multimed';

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
  private _id: number;
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
    if(parsedToken.roles == Role.Mulitmed){
      this._user$ = new BehaviorSubject<LoginUser>(new Multimed(parsedToken.id, parsedToken.unique_name, parsedToken.roles));
    }else{
      this._user$ = new BehaviorSubject<LoginUser>(new Therapist(parsedToken.id, parsedToken.unique_name, parsedToken.roles));
    }
  }else{
    this._user$ = new BehaviorSubject<LoginUser>(parsedToken && parsedToken.unique_name && parsedToken.role);
  }
  
}

  // meth
  login(username: string, password: string): Observable<boolean> {
    
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTb2ZpZVZAZ21haWwuY29tIiwidW5pcXVlX25hbWUiOiJTb2ZpZVYiLCJJZCI6IiIsInJvbGVzIjoiTXVsdGltZWQiLCJleHAiOjE1NzQyNzI2Mjh9.YeNChn55ifUV_98lWlLT-AuOhfuTVjzVlHc9C9ivUhE";
    localStorage.setItem(this._tokenKey, token);
    const parsedToken = parseJwt(token);
    this._user$.next(new Multimed(parsedToken.id, username, Role.Mulitmed));
    return new BehaviorSubject<boolean>(true);
    
    return this.http
      .post(`${environment.apiUrl}/Account`, {username, password}, { responseType: 'text' })
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            const parsedToken = parseJwt(token);
            //de juiste gebruiker aanmaken aan de hand van de role
            
            if(parsedToken.roles == Role.Mulitmed){
              this._user$.next(new Multimed(parsedToken.id, username, parsedToken.roles))
            }else{
              this._user$.next(new Therapist(parsedToken.id, username, parsedToken.roles))
            }
        
            return true;
          } else {
            return false;
          }
        })
      );
      
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
      if(parsedToken.roles == Role.Mulitmed){
        this._user$.next(new Multimed(parsedToken.id, parsedToken.unique_name, parsedToken.roles))
      }else{
        this._user$.next(new Therapist(parsedToken.id, parsedToken.unique_name, parsedToken.roles))
      }
      return localToken;
    }
    return '';
  }
  get idFromToken(): number {
    const localToken = localStorage.getItem(this._tokenKey);
    if(localToken){
      let parsedToken = parseJwt(localToken);
      const id = parsedToken.id;
      return id;
    }
    return null;
  }

  isMultimed() {
    if(this.user$.value){
      return this._user$.value.role == Role.Mulitmed?false:true
    }
    return false;
  }
}