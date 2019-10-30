import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

export interface UserData {
  lastName: string;
  firstName: string;
  email: string;
  amountOfChallenges: number;
}

const COMPANY_DATA: Company[] = [
  new Company(0,  'Aaaajegnxc sd',  '093697896',  'comp@ny.com',  'companystraat',  '1',  'Gent',  '9000',  'België',  'www.google.com')
]

const USER_DATA: UserData[] = [
  {firstName: 'Alex', lastName: 'Barker', email: 'Alex.Barker@multimed.be', amountOfChallenges: 1},
  {firstName: 'Angus', lastName: 'Morton', email: 'Angus.Morton@multimed.be', amountOfChallenges: 2},
  {firstName: 'Eric', lastName: 'Mitchel', email: 'Eric.Mitchel@multimed.be', amountOfChallenges: 3},
  {firstName: 'Aiden', lastName: 'Davison', email: 'Aiden.Davison@multimed.be', amountOfChallenges: 6},
];

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  //var
  displayedColumns: string[] = ['']
  userData: UserData[]
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
