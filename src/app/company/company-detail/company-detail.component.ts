import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';
import { Challenge } from 'src/app/challenge/Challenge';
import { CompanyComponent } from '../company/company.component';
import { Router } from '@angular/router';
import { CompanyDataService } from '../company-data.service';

const COMPANY_DATA: Company = new Company(0,  'HoGent',  '093697896',  'comp@ny.com',  'companystraat',  '1',  'Gent',  '9000',  'België',  'www.google.com', new Date(2019, 11, 14))

const us: NormalUser = new NormalUser(0, "wazzaaaa97", "Ruben", "Grillaert", "ruben.grillaert.y1033@student.hogent.be", "+32474139526", new Date());
us.addChallenge(new Challenge(0, "Eerste challenge"))
us.addChallenge(new Challenge(0, "Eerste challenge"))
us.addChallenge(new Challenge(0, "Eerste challenge"))

COMPANY_DATA.addCompanyMember(us)

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  //var
  displayedColumns: string[] = ['']
  company: Company

  constructor(private _companyDataService: CompanyDataService, private _router: Router) { 
    this.company = COMPANY_DATA
  }

  ngOnInit() {
  }

  goToLink(){
    window.open(this.company.site, "_blank");
  }

  editCompany(id: number): void{
    this._router.navigate([`/bedrijf/edit/${id}`])
  }

}
