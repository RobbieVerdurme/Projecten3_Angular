import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { TherapistDataService } from '../therapist/therapist-data.service';
import { Therapist } from '../therapist/Therapist';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //var
  public therapist: Therapist;
  user$ = this._authService.user$.value;

  //const
  constructor(
    private _authService: AuthenticationService,
    private _therapistService: TherapistDataService
  ) { }

  //method
  ngOnInit() {
    this._therapistService
      .getTherapist$(1)
      .subscribe(item => (this.therapist = item));
  }

}
