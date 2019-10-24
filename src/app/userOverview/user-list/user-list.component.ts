import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatPaginator } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export interface UserData {
  lastName: string;
  firstName: string;
  email: string;
  amountOfChallenges: number;
}

const USER_DATA: UserData[] = [
  {firstName: 'test', lastName: 'Hydrogen', email: 'flextape@cantfix.that', amountOfChallenges: 1},
  {firstName: 'test', lastName: 'Helium', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Lithium', email: 'flextape@cantfix.that', amountOfChallenges: 3},
  {firstName: 'test', lastName: 'Beryllium', email: 'flextape@cantfix.that', amountOfChallenges: 6},
  {firstName: 'test', lastName: 'Boron', email: 'flextape@cantfix.that', amountOfChallenges: 8},
  {firstName: 'test', lastName: 'Carbon', email: 'flextape@cantfix.that', amountOfChallenges: 9},
  {firstName: 'test', lastName: 'Nitrogen', email: 'flextape@cantfix.that', amountOfChallenges: 6},
  {firstName: 'test', lastName: 'Oxygen', email: 'flextape@cantfix.that', amountOfChallenges: 7},
  {firstName: 'test', lastName: 'Fluorine', email: 'flextape@cantfix.that', amountOfChallenges: 7},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
  {firstName: 'test', lastName: 'Neon', email: 'flextape@cantfix.that', amountOfChallenges: 2},
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'amountOfChallenges'];
  dataSource: MatTableDataSource<UserData>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(breakpointObserver: BreakpointObserver) {
    this.dataSource = new MatTableDataSource(USER_DATA); 

    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
        ['firstName', 'lastName'] : 
        ['firstName', 'lastName', 'email', 'amountOfChallenges'];
    });
  
  }

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

}
