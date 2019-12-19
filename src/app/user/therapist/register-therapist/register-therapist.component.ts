import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Therapist } from '../Therapist';
import { TherapistDataService } from '../therapist-data.service';
import { OpeningTimes } from '../opening-times/opening-times';
import { TherapistType } from '../TherapistType';

@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})
export class RegisterTherapistComponent implements OnInit {
  //var
  public therapistForm: FormGroup;
  public errorMsg: string;
  public therapist: Therapist
  public isEdit: boolean = true;

  //const
  constructor(
    private auth: AuthenticationService,
    private _therapistDataService: TherapistDataService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  //method
  ngOnInit() {
    this.route.data.subscribe(item => this.therapist = item['therapist']);
    if(this.therapist === undefined){
      this.isEdit = false
      this.therapist = new Therapist(0, "", "")
      this.therapist.openingTimes = new Array<OpeningTimes>()

      this.therapistForm = this.fb.group({
        photo: [''],
        firstname: [this.therapist.firstname, Validators.required],
        lastname: [this.therapist.lastname, Validators.required],
        email:[this.therapist.email, Validators.required],
        telephone: [this.therapist.telephone, Validators.required],
        workingHoursMa: [''],
        workingHoursDi: [''],
        workingHoursWo: [''],
        workingHoursDo: [''],
        workingHoursVr: [''],
        workingHoursZa: [''],
        workingHoursZo: [''],
        website: [this.therapist.website],
        street: [this.therapist.street],
        houseNumber: [this.therapist.houseNumber],
        postalCode: [this.therapist.postalCode],
        city: [this.therapist.city],
        category: ['']
      });
    }
    else{
      this.therapistForm = this.fb.group({
        photo: [''],
        firstname: [this.therapist.firstname, Validators.required],
        lastname: [this.therapist.lastname, Validators.required],
        email:[this.therapist.email, Validators.required],
        telephone: [this.therapist.telephone, Validators.required],
        workingHoursMa: [this.therapist.openingTimes[0].Interval],
        workingHoursDi: [this.therapist.openingTimes[1].Interval],
        workingHoursWo: [this.therapist.openingTimes[2].Interval],
        workingHoursDo: [this.therapist.openingTimes[3].Interval],
        workingHoursVr: [this.therapist.openingTimes[4].Interval],
        workingHoursZa: [this.therapist.openingTimes[5].Interval],
        workingHoursZo: [this.therapist.openingTimes[6].Interval],
        website: [this.therapist.website],
        street: [this.therapist.street],
        houseNumber: [this.therapist.houseNumber],
        postalCode: [this.therapist.postalCode],
        city: [this.therapist.city],
        category: ['']
      });
    }
  }

  getErrorMessage(errors: any){
    if(!errors){
      return null;
    }
    if(errors.required) return 'Verplicht'
  }

  addTherapist(){
    this.setTherapistValues()
    this._therapistDataService.addNewTherapist(this.therapist)
    .subscribe(
      Response => {
        if(Response.status === 200){
          this.router.navigate(['/therapeut/lijst'])
        }
        else{
          this.errorMsg = 'Fout bij het aanmaken van een therapeut'
        }
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het aanmaken van therapeut ${this.therapistForm.value.firstname}`
        }else{
          this.errorMsg = `Error ${err.status} bij het aanmaken van therapeut ${this.therapistForm.value.firstname}`
        }
      }
    )
  }

  deleteTherapist(){
    this._therapistDataService.removeTherapist(this.therapist.id)
    .subscribe(
      Response => {
        if(Response.status === 200){
          this.router.navigate(['/therapeut/lijst'])
        }
        else{
          this.errorMsg = 'Fout bij het verwijderen van een therapeut'
        }
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het verwijderen van therapeut ${this.therapistForm.value.firstname}`
        }else{
          this.errorMsg = `Error ${err.status} bij het verwijderen van therapeut ${this.therapistForm.value.firstname}`
        }
      }
    )
  }

  editTherapist(){
    this.setTherapistValues()
    var x = this.therapist
    this._therapistDataService.editTherapist(this.therapist)
    .subscribe(
      Response => {
        if(Response.status === 200){
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

  isTherapist(){
    return this.auth.isTherapist()         
  }


  setTherapistValues(){
    this.therapist.firstname = this.therapistForm.value.firstname,
    this.therapist.lastname = this.therapistForm.value.lastname,
    this.therapist.email = this.therapistForm.value.email,
    this.therapist.telephone = this.therapistForm.value.telephone,
    this.therapist.openingTimes = this.therapistForm.value.workingHours,
    this.therapist.website = this.therapistForm.value.website
    this.therapist.street = this.therapistForm.value.street
    this.therapist.houseNumber = this.therapistForm.value.houseNumber
    this.therapist.postalCode = this.therapistForm.value.postalCode
    this.therapist.city = this.therapistForm.value.city

    if(this.isEdit){
      this.therapist.openingTimes.push(this.therapistForm.value.workingHoursMa)
      this.therapist.openingTimes.push(this.therapistForm.value.workingHoursDi)
      this.therapist.openingTimes.push(this.therapistForm.value.workingHoursWo)
      this.therapist.openingTimes.push(this.therapistForm.value.workingHoursDo)
      this.therapist.openingTimes.push(this.therapistForm.value.workingHoursVr)
      this.therapist.openingTimes.push(this.therapistForm.value.workingHoursZa)
      this.therapist.openingTimes.push(this.therapistForm.value.workingHoursZo)
    }
    else{
      this.therapist.openingTimes = new Array<OpeningTimes>()
      this.therapist.openingTimes.push(new OpeningTimes(this.therapistForm.value.workingHoursMa))
      this.therapist.openingTimes.push(new OpeningTimes(this.therapistForm.value.workingHoursDi))
      this.therapist.openingTimes.push(new OpeningTimes(this.therapistForm.value.workingHoursWo))
      this.therapist.openingTimes.push(new OpeningTimes(this.therapistForm.value.workingHoursDo))
      this.therapist.openingTimes.push(new OpeningTimes(this.therapistForm.value.workingHoursVr))
      this.therapist.openingTimes.push(new OpeningTimes(this.therapistForm.value.workingHoursZa))
      this.therapist.openingTimes.push(new OpeningTimes(this.therapistForm.value.workingHoursZo))
    }

    
    //this.therapistForm.value.category
  }
  
  onSubmit(){
    this.auth
    .registerTherapist(
      this.therapistForm.value.photo,
      this.therapistForm.value.username,
      this.therapistForm.value.firstname,
      this.therapistForm.value.lastname,
      this.therapistForm.value.email,
      this.therapistForm.value.telephone,
      this.therapistForm.value.workingHours,
      this.therapistForm.value.website,
      this.therapistForm.value.category
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
            this.errorMsg = `Error bij het registreren van gebruiker ${this.therapistForm.value.firstname}`
          } else{
            this.errorMsg = `Error ${err.status} bij het registreren van gebruiker ${this.therapistForm.value.firstname}`
          }
        }
      )
  }
}
