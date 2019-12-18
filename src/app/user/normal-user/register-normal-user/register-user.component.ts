import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NormalUserDataService } from '../normal-user-data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  //var
  public user: FormGroup;
  public errorMsg: string;
  
  //const
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private normalUserService: NormalUserDataService
  ) { }

  //meth
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
    this.normalUserService
    .addNewUser(
      this.user.value.username,
      this.user.value.firstname,
      this.user.value.lastname,
      this.user.value.email,
      this.user.value.telephone,
      this.user.value.category
      )
      .subscribe(
        response => {
          if (response.status === 200){
            this.router.navigate([`gebruiker/lijst`])
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
