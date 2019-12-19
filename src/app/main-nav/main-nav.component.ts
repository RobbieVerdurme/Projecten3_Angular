import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { AuthenticationService } from "./../user/authentication.service";
import { Role } from "../user/role";
import { LoginUser } from "../user/loginuser";
import { Therapist } from '../user/therapist/Therapist';
import { TherapistDataService } from '../user/therapist/therapist-data.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent {
  //var
  loggedInUser$ = this._authenticationService.user$;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  //ctor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authenticationService: AuthenticationService,
    private _authService: AuthenticationService,
    private router: Router
  ) {}

  //methods
  logout() {
    this._authenticationService.logout();
  }

  //getters
  get isMultimed() {
    return this._authenticationService.isMultimed();
  }

  get isTherapist(){
    return this._authenticationService.isTherapist();
  }

  get isLoggedIn(){
    return this._authenticationService.isLoggedIn();
  }

  goToProfile(){
    var therapist = <Therapist>this._authService.user$.value
     this.router.navigate([`/therapeut/${therapist.id}`])
  }

}
