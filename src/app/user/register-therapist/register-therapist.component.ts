import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})
export class RegisterTherapistComponent implements OnInit {
  //var
  public user: FormGroup;
  public errorMsg: string;

  //const
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  //method
  ngOnInit() {
    this.user = this.fb.group({
      photo: [''],
      username : [''],
      firstname: [''],
      lastname: [''],
      email:[''],
      telephone: [''],
      category: ['']
    });
  }
  
  onSubmit(){
    this.auth
    .registerTherapist(
      this.user.value.photo,
      this.user.value.username,
      this.user.value.firstname,
      this.user.value.lastname,
      this.user.value.email,
      this.user.value.telephone,
      this.user.value.category
      )
      .subscribe(
        val => {
          if (val){
            this.router.navigate['']
          }else{
            this.errorMsg = "Error bij registreren"
          }
        },
        (err: HttpErrorResponse) => {
          if(err.error instanceof Error){
            this.errorMsg = `Error bij het registreren van gebruiker ${this.user.value.firstname}`
          } else{
            this.errorMsg = `Error ${err.status} bij het registreren van gebruiker ${this.user.value.firstname}`
          }
        }
      )
  }
}
