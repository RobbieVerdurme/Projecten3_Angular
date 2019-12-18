import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from '../company';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CompanyDataService } from '../company-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  //var
  displayedColumns: string[] = ['name', 'city', 'country', 'contractValid'];
  dataSource: MatTableDataSource<Company>;
  private companies$: Observable<Company[]> = this.companyDataService.Companies$;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //ctor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private companyDataService: CompanyDataService
  ) { 
    
  }

  //methods
  ngOnInit() {
    //Set fields that can be filtered
    this.dataSource = new MatTableDataSource();
    this.dataSource.filterPredicate = function(data, filter: string): boolean{
      return data.name.toLowerCase().includes(filter)||
      data.city.toLowerCase().includes(filter)||
      data.country.toLowerCase().includes(filter)
    }

    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches?
      ['name'] : ['name', 'city', 'country', 'contractValid'];
    });

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
    this.router.navigate([`bedrijf/${company.id}`])
  }

  contractValid(contractDate: Date): boolean
  {
    var currentDate = new Date();
    if(contractDate > currentDate)
    {
      return true;
    }
    return false;
  }

}
