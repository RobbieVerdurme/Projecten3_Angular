import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatPaginator } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/user/loginuser';

export interface UserData {
  lastName: string;
  firstName: string;
  email: string;
  amountOfChallenges: number;
}

const USER_DATA: UserData[] = [
  {firstName: 'Alex', lastName: 'Barker', email: 'Alex.Barker@multimed.be', amountOfChallenges: 1},
  {firstName: 'Angus', lastName: 'Morton', email: 'Angus.Morton@multimed.be', amountOfChallenges: 2},
  {firstName: 'Eric', lastName: 'Mitchel', email: 'Eric.Mitchel@multimed.be', amountOfChallenges: 3},
  {firstName: 'Aiden', lastName: 'Davison', email: 'Aiden.Davison@multimed.be', amountOfChallenges: 6},
  {firstName: 'Abdul', lastName: 'Castro', email: 'Abdul.Castro@multimed.be', amountOfChallenges: 8},
  {firstName: 'Freddy', lastName: 'Parsons', email: 'Freddy.Parsons@multimed.be', amountOfChallenges: 9},
  {firstName: 'Charles', lastName: 'Higgins', email: 'Charles.Higgins@multimed.be', amountOfChallenges: 6},
  {firstName: 'Marco', lastName: 'Frost', email: 'Marco.Frost@multimed.be', amountOfChallenges: 7},
  {firstName: 'Ciaran', lastName: 'Matthews', email: 'Ciaran.Matthews@multimed.be', amountOfChallenges: 7},
  {firstName: 'Oskar', lastName: 'Houston', email: 'Oskar.Houston@multimed.be', amountOfChallenges: 2},
  {firstName: 'Glenn', lastName: 'Campos', email: 'Glenn.Camos@multimed.be', amountOfChallenges: 2},
  {firstName: 'Xavier', lastName: 'Long', email: 'Xavier.Long@multimed.be', amountOfChallenges: 2},
  {firstName: 'Musa', lastName: 'Strickland', email: 'Musa.Strickland@multimed.be', amountOfChallenges: 2},
  {firstName: 'Darren', lastName: 'Sherman', email: 'Darren.Sherman@multimed.be', amountOfChallenges: 2},
  {firstName: 'Alex', lastName: 'Barker', email: 'Alex.Barker@multimed.be', amountOfChallenges: 1},
  {firstName: 'Angus', lastName: 'Morton', email: 'Angus.Morton@multimed.be', amountOfChallenges: 2},
  {firstName: 'Eric', lastName: 'Mitchel', email: 'Eric.Mitchel@multimed.be', amountOfChallenges: 3},
  {firstName: 'Aiden', lastName: 'Davison', email: 'Aiden.Davison@multimed.be', amountOfChallenges: 6},
  {firstName: 'Abdul', lastName: 'Castro', email: 'Abdul.Castro@multimed.be', amountOfChallenges: 8},
  {firstName: 'Freddy', lastName: 'Parsons', email: 'Freddy.Parsons@multimed.be', amountOfChallenges: 9},
  {firstName: 'Charles', lastName: 'Higgins', email: 'Charles.Higgins@multimed.be', amountOfChallenges: 6},
  {firstName: 'Marco', lastName: 'Frost', email: 'Marco.Frost@multimed.be', amountOfChallenges: 7},
  {firstName: 'Ciaran', lastName: 'Matthews', email: 'Ciaran.Matthews@multimed.be', amountOfChallenges: 7},
  {firstName: 'Oskar', lastName: 'Houston', email: 'Oskar.Houston@multimed.be', amountOfChallenges: 2},
  {firstName: 'Glenn', lastName: 'Campos', email: 'Glenn.Camos@multimed.be', amountOfChallenges: 2},
  {firstName: 'Xavier', lastName: 'Long', email: 'Xavier.Long@multimed.be', amountOfChallenges: 2},
  {firstName: 'Musa', lastName: 'Strickland', email: 'Musa.Strickland@multimed.be', amountOfChallenges: 2},
  {firstName: 'Darren', lastName: 'Sherman', email: 'Darren.Sherman@multimed.be', amountOfChallenges: 2}
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //var
  @Input() userData: UserData[]
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'amountOfChallenges'];
  dataSource: MatTableDataSource<UserData>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //ctor
  constructor(
    breakpointObserver: BreakpointObserver,
    private router: Router
    ) {
      this.dataSource = new MatTableDataSource(USER_DATA); 

      breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
        this.displayedColumns = result.matches ? 
          ['firstName', 'lastName'] : 
          ['firstName', 'lastName', 'email', 'amountOfChallenges'];
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

  detailscreen(user){
    this.router.navigate(['/overzicht/user/1'])
  }
}
