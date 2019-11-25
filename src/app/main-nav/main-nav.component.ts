import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { AuthenticationService } from "./../user/authentication.service";
import { Role } from "../user/role";
import { LoginUser } from "../user/loginuser";

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
    private _authenticationService: AuthenticationService
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

}
