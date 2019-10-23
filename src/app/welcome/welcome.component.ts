import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { LoginUser } from '../user/loginuser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //loggedInUser$ = this._authenticationService.user$;

  loggedInUser$: LoginUser

  constructor(
    private _authenticationService: AuthenticationService,
    //loggedInUser$ = new LoginUser("test", "Multimed")
    ) { }

  ngOnInit() {
  }

}
