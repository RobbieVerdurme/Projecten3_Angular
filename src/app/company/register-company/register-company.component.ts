import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyDataService } from '../company-data.service';
import { Company } from 'src/app/company/company';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginUser } from 'src/app/user/loginuser';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  //var
  public companyForm: FormGroup;
  public errorMsg: string;
  public company: Company;
  public isEdit: boolean = true;

  //const
  constructor(
    private _companyDataService: CompanyDataService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  //methodes
  ngOnInit() {
    //Check if edit or register 
      this.route.data.subscribe(item => this.company = item['company']);
      if(this.company === undefined){
        this.isEdit = false
        this.company = new Company(0, "", "", "", "", "", "", "", "", "", new Date(), new Array<NormalUser>())
      }
      // remove create of company and add error, company should never be null if it has a detail page
      if(this.company === null || this.company === undefined){
        this.company = new Company(0, "", "", "", "", "", "", "", "", "", new Date(), new Array<NormalUser>())
      }

      //Modify validation of each field
    this.companyForm = this.fb.group({
      name: [this.company.name, Validators.required],
      phone: [this.company.phone, Validators.required],
      mail: [this.company.mail, Validators.required],
      street: [this.company.street, Validators.required],
      houseNumber: [this.company.houseNumber, [Validators.required, Validators.pattern("[0-9]*")]],
      city: [this.company.city, Validators.required],
      postalCode: [this.company.postalCode, [Validators.required, Validators.pattern("[0-9]*")]],
      country: [this.company.country, Validators.required],
      site: [this.company.city],
      contract: [this.company.contract, Validators.required]
    });
  }

  

  getErrorMessage(errors: any){
    if(!errors){
      return null;
    }
    if(errors.required) return 'Verplicht'
    if(errors.pattern) return 'Only numbers allowed'
  }

  addCompany(){
    this.setCompanyValues();
    var bool = true;
    this._companyDataService.addNewCompany(this.company)
    .subscribe(val => bool = false) 
        if(bool){
          this.router.navigate['']
        }else{
          this.errorMsg = 'Fout bij het aanmaken van een Bedrijf!'
        }
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het aanmaken van bedrijf ${this.companyForm.value.name}`
        }else{
          this.errorMsg = `Error ${err.status} bij het aanmaken van bedrijf ${this.companyForm.value.name}`
        }
      }
  }

  editCompany(){
    this.setCompanyValues();
    this._companyDataService.editCompany(this.company)
    .subscribe(
      val => {
        if(val){
          this.router.navigate['']
        }else{
          this.errorMsg = `Fout bij het aanpassen van ${this.company.name}!`
        }
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het aanpassen van bedrijf ${this.company.name}`
        }else{
          this.errorMsg = `Error ${err.status} bij het aanpassen van bedrijf ${this.company.name}`
        }
      }
    )
  }

  deleteCompany(){
    var bool = true;
    this._companyDataService.removeCompany(this.company.id)
    .subscribe(
      val => bool = false)
        if(bool){
          this.router.navigate['/bedrijf/lijst']
        }else{
          this.errorMsg = `Fout bij het verwijderen van ${this.company.name}!`
        }
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          this.errorMsg = `Error bij het verwijderen van bedrijf ${this.company.name}`
        }else{
          this.errorMsg = `Error ${err.status} bij het verwijderen van bedrijf ${this.company.name}`
        }
      }
  }

  // Set new values to company
  setCompanyValues(){
    this.company.name = this.companyForm.value.name;
    this.company.phone = this.companyForm.value.phone;
    this.company.mail = this.companyForm.value.mail;
    this.company.street = this.companyForm.value.street;
    this.company.houseNumber = this.companyForm.value.houseNumber;
    this.company.city = this.companyForm.value.city;
    this.company.postalCode = this.companyForm.value.postalCode; 
    this.company.country = this.companyForm.value.country;
    this.company.site = this.companyForm.value.site;
    this.company.contract = this.companyForm.value.contract
  }

}
