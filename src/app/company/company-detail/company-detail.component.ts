import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';

const COMPANY_DATA: Company[] = [
  new Company(0,  'Aaaajegnxc sd',  '093697896',  'comp@ny.com',  'companystraat',  '1',  'Gent',  '9000',  'België',  'www.google.com', new Date(2019, 11, 14))
]

const USER_DATA: NormalUser[] = [
 /* new NormalUser(0, "wazzaaaa", "Ruben", "Grillaert", "mail@email.com", "0474139526"),
  new NormalUser(1, "wazzaaa", "Rub", "Grillaert", "mail@email.com", "0474139526"),
  new NormalUser(2, "wazzaa", "Rubn", "Grillaert", "mail@email.com", "0474139526"),
  new NormalUser(3, "waaaa", "ubn", "Grillaert", "mail@email.com", "0474139526"),*/
];

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  //var
  displayedColumns: string[] = ['']
  userData: NormalUser[]
  companyData: Company

  constructor() { 
    this.userData = USER_DATA
    this.companyData = COMPANY_DATA[0]
  }

  ngOnInit() {
  }

  goToLink(){
    window.open(this.companyData.site, "_blank");
  }

}
