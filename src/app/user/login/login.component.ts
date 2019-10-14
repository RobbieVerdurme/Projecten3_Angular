import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // var
  public user: FormGroup;
  public errorMsg: string;

  // constructor
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  // meth
  ngOnInit() {
    this.user = this.fb.group({
      username : ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.auth
    .login(this.user.value.username, this.user.value.password)
    .subscribe(
      val => {
        if (val) {
          this.router.navigate(['']);
        } else {
          this.errorMsg = 'Error bij inloggen';
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error){
          this.errorMsg = `Error bij het inloggen van user ${this.user.value.username}`;
        } else {
          this.errorMsg = `Error ${err.status} bij het inloggen van user ${this.user.value.username}`;
        }
      }
    )
  }
}
