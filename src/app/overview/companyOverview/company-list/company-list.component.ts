import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

//MockData to fill company list
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
  {id: 1, name: 'Bbbb', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '2', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 2, name: 'Cccc', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '3', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 3, name: 'Dddd', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '4', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 4, name: 'Eeee', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '5', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 5, name: 'Ffff', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '6', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 6, name: 'Gggg', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '7', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 7, name: 'Hhhh', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '8', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 8, name: 'Iiii', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '9', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 9, name: 'Jjjj', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '10', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 10, name: 'Kkkk', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '11', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'},
  {id: 11, name: 'Llll', phone: '093697896', mail: 'comp@ny.com', street: 'companystraat', houseNumber: '12', city: 'Gent', postalCode: '9000', country: 'België', site: 'www.google.com'}
]

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  //var
  displayedColumns: string[] = ['name', 'city', 'country'];
  dataSource: MatTableDataSource<CompanyData>;

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
  FunctieAfwerkenBedenken(company){

  }

}
