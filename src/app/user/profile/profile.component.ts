import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { TherapistDataService } from '../therapist/therapist-data.service';
import { Therapist } from '../therapist/Therapist';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //var
  public therapist: Therapist;
  public therapistForm: FormGroup;
  public errorMsg: string;
  private isEdit: boolean;
  user$ = this._authService.user$.value;

  //const
  constructor(
    private _authService: AuthenticationService,
    private _therapistDataService: TherapistDataService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  //method
  ngOnInit() {
     var therapist = <Therapist>this._authService.user$.value
     this.router.navigate([`/therapeut/${therapist.id}`])
     console.log(therapist.id)
     this._therapistDataService.getTherapist$(therapist.id).subscribe()
    // this._therapistDataService
    //   .getTherapist$(therapist.id)
    //   .subscribe(
    //     item => {
    //       this.therapist = item
    //       this.therapistForm = this.fb.group({
    //         firstname: [this.therapist.firstname, Validators.required],
    //         lastname: [this.therapist.lastname, Validators.required],
    //         email: [this.therapist.email, [Validators.required, Validators.email]],
    //         telephone: [this.therapist.telephone],
    //         website: [this.therapist.website]
    //       });
    //     });

    //Add validation to form
    // this.therapistForm = this.fb.group({
    //   firstname: [this.therapist.firstname, Validators.required],
    //   lastname: [this.therapist.lastname, Validators.required],
    //   email: [this.therapist.email, [Validators.required, Validators.email]],
    //   telephone: [this.therapist.telephone],
    //   website: [this.therapist.website]
    // });
    
  }

  getErrorMessage(errors: any){
    if(!errors){
      return null;
    }
    if(errors.required) return 'Verplicht'
    if(errors.email) return 'Gelieve een geldig emailadres op te geven'
  }

  editTherapist(){
    this.setTherapistValues()
    this._therapistDataService.editTherapist(this.therapist)
    .subscribe(
      response => {
        if(response.status === 200){
          this.router.navigate(['/therapeut/lijst'])
        }
        else{
          this.errorMsg = 'Fout bij het aanpassen van een therapeut'
        }
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het aanpassen van therapeut ${this.therapistForm.value.firstname}`
        }else{
          this.errorMsg = `Error ${err.status} bij het aanpassen van therapeut ${this.therapistForm.value.firstname}`
        }
      }
    )
  }

  setTherapistValues(){
    this.therapist.firstname = this.therapistForm.value.firstname;
    this.therapist.lastname = this.therapistForm.value.lastname;
    this.therapist.email = this.therapistForm.value.email;
    this.therapist.telephone = this.therapistForm.value.telephone;
    this.therapist.website = this.therapistForm.value.website;
  }

}
