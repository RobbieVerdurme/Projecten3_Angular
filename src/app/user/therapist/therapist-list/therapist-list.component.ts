import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

export interface TherapistData {
  lastName: string;
  firstName: string;
  email: string;
  telephone: string;
  functie: string;
}

const THERAPIST_DATA: TherapistData[] = [
  {firstName: 'Alex', lastName: 'Barker', email: 'Alex.Barker@therapeut-multimed.be', telephone:"2(6431)465-92-36", functie: "Kinesist"},
  {firstName: 'Angus', lastName: 'Morton', email: 'Angus.Morton@therapeut-multimed.be',telephone:"54(54)362-94-77", functie: "Tabakoloog" },
  {firstName: 'Eric', lastName: 'Mitchel', email: 'Eric.Mitchel@therapeut-multimed.be', telephone:"989(4325)623-65-73", functie: "Kinesist"},
  {firstName: 'Aiden', lastName: 'Davison', email: 'Aiden.Davison@therapeut-multimed.be', telephone:"279(2418)134-80-47", functie: "Psycholoog"},
  {firstName: 'Abdul', lastName: 'Castro', email: 'Abdul.Castro@therapeut-multimed.be', telephone:"323(703)495-12-44", functie: "Logopedie"},
  {firstName: 'Freddy', lastName: 'Parsons', email: 'Freddy.Parsons@therapeut-multimed.be', telephone:"4(29)065-40-44", functie: "Massagetherapeut & begegingscoach"},
  {firstName: 'Charles', lastName: 'Higgins', email: 'Charles.Higgins@therapeut-multimed.be', telephone:"13(3641)722-77-40", functie: "Diëtiste"},
  {firstName: 'Marco', lastName: 'Frost', email: 'Marco.Frost@therapeut-multimed.be', telephone:"8(70)644-29-93", functie: "Ergotherapeut"},
  {firstName: 'Ciaran', lastName: 'Matthews', email: 'Ciaran.Matthews@therapeut-multimed.be', telephone:"38(770)211-94-47", functie: "Kinderyoga"},
  {firstName: 'Oskar', lastName: 'Houston', email: 'Oskar.Houston@therapeut-multimed.be', telephone:"8(5692)391-72-17", functie: "Coach"},
  {firstName: 'Glenn', lastName: 'Campos', email: 'Glenn.Camos@therapeut-multimed.be', telephone:"517(60)108-13-09", functie: "Seksuoloog" },
  {firstName: 'Xavier', lastName: 'Long', email: 'Xavier.Long@therapeut-multimed.be', telephone:"247(580)731-95-65", functie: "Gezinscounselor"}
];

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.css']
})
export class TherapistListComponent implements OnInit {

  //var
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'telephone', 'functie'];
  dataSource: MatTableDataSource<TherapistData>;
  

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
        ['firstName', 'lastName'] : 
        ['firstName', 'lastName', 'email', 'telephone', 'functie'];
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
