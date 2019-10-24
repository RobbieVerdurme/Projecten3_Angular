import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //var
  user$ = this._authService.user$.value

  //const
  constructor(
    private _authService: AuthenticationService
  ) { }

  //method
  ngOnInit() {
  }

}
