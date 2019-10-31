import { Component, OnInit, ViewChild } from '@angular/core';
import { Therapist } from '../Therapist';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';


const THERAPIST_DATA: Therapist[] = [
  new Therapist(0, "ther1", "Jos", "Krets", "joskrets@hotmail.com", "0445879636", "Sportcoach"),
  new Therapist(1, "ther2", "Joss", "Kretes", "joskrets@hotmail.com", "0445879636", "Revalidatie"),
  new Therapist(2, "ther3", "Josd", "Kreets", "joskrets@hotmail.com", "0445879636", "Dietist"),
  new Therapist(3, "ther4", "Josf", "Kreets", "joskrets@hotmail.com", "0445879636", "AA"),
  new Therapist(4, "ther5", "Josg", "Kerets", "joskrets@hotmail.com", "0445879636", "iets"),
];

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.css']
})
export class TherapistListComponent implements OnInit {

  //var
  displayedColumns: string[] = ['firstname', 'familyname', 'email', 'telephone', 'function'];
  dataSource: MatTableDataSource<Therapist>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //ctor
  constructor(
    breakpointObserver: BreakpointObserver,
    private router: Router
    ) {
    this.dataSource = new MatTableDataSource(THERAPIST_DATA); 

    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
        ['firstname', 'familyname'] : 
        ['firstname', 'familyname', 'email', 'telephone', 'function'];
    });
  
  }

  //methods
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  detailscreen(therapist){
    this.router.navigate(['/therapeut/id'])
  }

}
