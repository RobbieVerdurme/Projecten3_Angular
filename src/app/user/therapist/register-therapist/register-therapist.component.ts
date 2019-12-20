import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Therapist } from '../Therapist';
import { TherapistDataService } from '../therapist-data.service';
import { OpeningTimes } from '../opening-times/opening-times';
import { TherapistType } from '../TherapistType';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TherapistTypeDialogComponent } from '../therapist-type-dialog/therapist-type-dialog.component';
import { Category } from 'src/app/challenge/Category';

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

  selectedType: TherapistType = null;

  private types$: Observable<TherapistType[]> = this._therapistDataService.TherapistTypes$;
  //isLoading$: Subject<boolean> = new Subject<boolean>();

  //const
  constructor(
    private auth: AuthenticationService,
    private _therapistDataService: TherapistDataService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public dialog: MatDialog
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
        workingHoursMa: ['', Validators.required],
        workingHoursDi: ['', Validators.required],
        workingHoursWo: ['', Validators.required],
        workingHoursDo: ['', Validators.required],
        workingHoursVr: ['', Validators.required],
        workingHoursZa: ['', Validators.required],
        workingHoursZo: ['', Validators.required],
        website: [this.therapist.website, Validators.required],
        street: [this.therapist.street, Validators.required],
        houseNumber: [this.therapist.houseNumber, Validators.required],
        postalCode: [this.therapist.postalCode, Validators.required],
        city: [this.therapist.city, Validators.required],
        type: ['', Validators.required]
      });
    }
    else{
      this.therapistForm = this.fb.group({
        photo: [''],
        firstname: [this.therapist.firstname, Validators.required],
        lastname: [this.therapist.lastname, Validators.required],
        email:[this.therapist.email, Validators.required],
        telephone: [this.therapist.telephone, Validators.required],
        workingHoursMa: [this.therapist.openingTimes[0].Interval, Validators.required],
        workingHoursDi: [this.therapist.openingTimes[1].Interval, Validators.required],
        workingHoursWo: [this.therapist.openingTimes[2].Interval, Validators.required],
        workingHoursDo: [this.therapist.openingTimes[3].Interval, Validators.required],
        workingHoursVr: [this.therapist.openingTimes[4].Interval, Validators.required],
        workingHoursZa: [this.therapist.openingTimes[5].Interval, Validators.required],
        workingHoursZo: [this.therapist.openingTimes[6].Interval, Validators.required],
        website: [this.therapist.website, Validators.required],
        street: [this.therapist.street, Validators.required],
        houseNumber: [this.therapist.houseNumber, Validators.required],
        postalCode: [this.therapist.postalCode, Validators.required],
        city: [this.therapist.city, Validators.required],
        type: [this.therapist.therapistType.type, Validators.required]
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
    this.therapist.website = this.therapistForm.value.website
    this.therapist.street = this.therapistForm.value.street
    this.therapist.houseNumber = this.therapistForm.value.houseNumber
    this.therapist.postalCode = this.therapistForm.value.postalCode
    this.therapist.city = this.therapistForm.value.city
    this.therapist.therapistType = this.therapistForm.value.type
    if(this.isEdit){
      this.therapist.openingTimes[0].Interval = this.therapistForm.value.workingHoursMa
      this.therapist.openingTimes[1].Interval = this.therapistForm.value.workingHoursDi
      this.therapist.openingTimes[2].Interval = this.therapistForm.value.workingHoursWo
      this.therapist.openingTimes[3].Interval = this.therapistForm.value.workingHoursDo
      this.therapist.openingTimes[4].Interval = this.therapistForm.value.workingHoursVr
      this.therapist.openingTimes[5].Interval = this.therapistForm.value.workingHoursZa
      this.therapist.openingTimes[6].Interval = this.therapistForm.value.workingHoursZo
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

  OpenDialog(): void {
    const dialogref = this.dialog.open(TherapistTypeDialogComponent, {
      data: {
        type: "",
        category: new Array<Category>()
      }
    })
    dialogref.afterClosed().subscribe( result =>{
      this.types$ = this._therapistDataService.TherapistTypes$;
    })
  };
  
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
      this.therapistForm.value.type
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
