import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NormalUser } from '../NormalUser';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatPaginator } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/challenge/Challenge';
import { Category } from 'src/app/challenge/Category';



const us: NormalUser = new NormalUser(0, "wazzaaaa97", "Ruben", "Grillaert", "ruben.grillaert.y1033@student.hogent.be", "+32474139526", new Date());
us.addChallenge(new Challenge(0, "Loop een marathon","Loop 42 kilometer, dit is de afstand van een marathon",new Category(1,"Sport")))


const USER_DATA: NormalUser[] = [us];


@Component({
  selector: 'app-normal-user-list',
  templateUrl: './normal-user-list.component.html',
  styleUrls: ['./normal-user-list.component.css']
})
export class NormalUserListComponent implements OnInit {
//var
  @Input() userData: NormalUser[]
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'challenges'];
  dataSource: MatTableDataSource<NormalUser>;
  

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
          ['firstname', 'lastname'] : 
          ['firstname', 'lastname', 'email', 'challenges'];
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

  navigateToDetailPage(user: NormalUser){
    this.router.navigate(['/gebruiker/id'],{state : user});
  }

}
 