import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from '../company';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

//MockData to fill company list
const COMPANY_DATA: Company[] = [
  new Company(0,  'Aaaajegnxc sd',  '093697896',  'comp@ny.com',  'companystraat',  '1',  'Gent',  '9000',  'België',  'www.google.com')
]

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  //var
  displayedColumns: string[] = ['name', 'city', 'country'];
  dataSource: MatTableDataSource<Company>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //ctor
  constructor(
    breakpointObserver: BreakpointObserver,
    private router: Router
  ) { 
    //Set fields that can be filtered
    this.dataSource = new MatTableDataSource(COMPANY_DATA);
    this.dataSource.filterPredicate = function(data, filter: string): boolean{
      return data.name.toLowerCase().includes(filter)||
      data.city.toLowerCase().includes(filter)||
      data.country.toLowerCase().includes(filter);
    }

    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches?
      ['name'] : ['name', 'city', 'country'];
    });
  }

  //methods
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  //Deze functie wordt geactiveerd bij het klikken op een bedrijf in de lijst
  //Of naar nieuwe lijst gaan of naar bestaande lijst van users, reeds gefilterd door bedrijfkeuze
  companyDetailScreen(company: Company){
    this.router.navigate(['bedrijf/id'])
  }

}
