import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';
import { Challenge } from 'src/app/challenge/Challenge';
import { CompanyComponent } from '../company/company.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyDataService } from '../company-data.service';
import { Category } from 'src/app/challenge/Category';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  //var
  displayedColumns: string[] = ['']
  company: Company

  constructor(private route: ActivatedRoute, private _companyDataService: CompanyDataService, private _router: Router) { 
  }

  ngOnInit() {
    this.route.data.subscribe(item => this.company = item['company']);
  }

  goToLink(){
    window.open(this.company.site, "_blank");
  }

  editCompany(id: number): void{
    this._router.navigate([`/bedrijf/edit/${id}`])
  }

}
