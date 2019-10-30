import { Component, OnInit } from '@angular/core';

export interface UserData {
  lastName: string;
  firstName: string;
  email: string;
  amountOfChallenges: number;
}

export interface CompanyData{
  id: number;
  name: string;
  phone: string; 
  mail: string;
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
  country: string;
  site: string;
}

const COMPANY_DATA: CompanyData[] = [
  {id: 0, name: 'Aaaajegnxc fdskljlgk odskfdsql sd', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '1', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
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
  companyData: CompanyData

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
