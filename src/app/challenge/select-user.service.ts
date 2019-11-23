import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NormalUser } from '../user/normal-user/NormalUser';

@Injectable({
  providedIn: 'root'
})
export class SelectUserService {

  private _user$: BehaviorSubject<NormalUser>;

  constructor() { 
    this._user$ = new BehaviorSubject(null);
  }

  setUser(user: NormalUser){
    this._user$.next(user);
  }

  getSubject(){
    return this._user$;
  }
}
