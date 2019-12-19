import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NormalUserDataService } from '../normal-user-data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoryDialogComponent } from 'src/app/category-dialog/category-dialog.component';
import { NormalUser } from '../NormalUser';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  //var
  public userForm: FormGroup;
  public errorMsg: string;
  public isEdit: boolean = true;
  public user:NormalUser;
  
  //const
  constructor(
    public dialog: MatDialog,
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private normalUserService: NormalUserDataService,
    private route: ActivatedRoute
  ) { }

  //meth
  ngOnInit() {
    this.route.data.subscribe(item => this.user = item['user'])

    if(this.user === undefined){
      this.isEdit = false
      this.user = new NormalUser(0, "", "", "", "", new Date())
    }
    // remove create of company and add error, company should never be null if it has a detail page
    if(this.user === null || this.user === undefined){
      this.user = new NormalUser(0, "", "", "", "", new Date())
    }

    this.userForm = this.fb.group({
      username : [''],
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      email:[this.user.email, Validators.required],
      telephone: [this.user.telephone, Validators.required],
      category: ['']
    });
  }

  addUser(){
    this.normalUserService
    .addNewUser(
      this.userForm.value.firstname,
      this.userForm.value.lastname,
      this.userForm.value.email,
      this.userForm.value.telephone,
      this.userForm.value.category
      )
      .subscribe(
        response => {
          if (response.status === 200)
          {
            this.router.navigate(['/gebruiker/lijst'])
          }else{
            this.errorMsg = "Error bij registreren"
          }
        },
        (err: HttpErrorResponse) => {
          if(err.error instanceof Error){
            this.errorMsg = `Error bij het registreren van gebruiker ${this.userForm.value.firstname}`
          } else{
            this.errorMsg = `Error ${err.status} bij het registreren van gebruiker ${this.userForm.value.firstname}`
          }
        }
      )
  }
  
  openDialog(): void {
    this.dialog.open(CategoryDialogComponent, {
      data: ""
    });
  }
    
  deleteUser(){
    this.normalUserService.removeUser(this.user.id)
    .subscribe(
      response => {
        if(response.status === 200){
          this.router.navigate(['/gebruiker/lijst'])
        }else{
          this.errorMsg = `Fout bij het verwijderen van ${this.user.firstname}!`
        }
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het verwijderen van de gebruiker`
        }else{
          this.errorMsg = `Fout bij het verwijderen van de gebruiker`
        }
      })    
  }

}
