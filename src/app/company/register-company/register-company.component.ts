import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyDataService } from '../company-data.service';
import { Company } from 'src/app/company/company';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginUser } from 'src/app/user/loginuser';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  //var
  public company: FormGroup;
  public errorMsg: string;

  //const
  constructor(
    private _companyDataService: CompanyDataService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  //methodes
  ngOnInit() {
      //Modify validation of each field
    this.company = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      site: [''],
      contract: ['', Validators.required]
    });
  }

  onSubmit(){
    var contractDate = new Date();
    contractDate = this.company.value.contract
    this._companyDataService.addNewCompany(
      new Company(
        null, 
        this.company.value.name, 
        this.company.value.phone, 
        this.company.value.mail, 
        this.company.value.street,
        this.company.value.houseNumber,
        this.company.value.city,
        this.company.value.postalCode, 
        this.company.value.country, 
        this.company.value.site, 
        contractDate,
        new Array<LoginUser>())
    )
    .subscribe(
      val => {
        if(val){
          this.router.navigate['']
        }else{
          this.errorMsg = 'Fout bij het aanmaken van een Bedrijf!'
        }
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het aanmaken van bedrijf ${this.company.value.name}`
        }else{
          this.errorMsg = `Error ${err.status} bij het aanmaken van bedrijf ${this.company.value.name}`
        }
      }
    )
  }

  getErrorMessage(errors: any){
    if(!errors){
      return null;
    }
    if(errors.required) return 'Verplicht'
  }

}
