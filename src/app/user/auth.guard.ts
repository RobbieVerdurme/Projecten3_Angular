import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //var

  //constructor
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  //methods
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.user$;
    if (user && this.authService.token) {
      if(next.data.roles && next.data.roles.indexOf(user.getValue().role) === -1) {
        this.router.navigate(['/welkom']);
        return false;
      }
      return true;
    }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }
}
