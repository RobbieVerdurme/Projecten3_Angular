import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NormalUser } from '../NormalUser';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatPaginator } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/challenge/Challenge';
import { Category } from 'src/app/challenge/Category';
import { SelectUserService } from 'src/app/challenge/select-user.service';



const us: NormalUser = new NormalUser(0, "wazzaaaa97", "Ruben", "Grillaert", "ruben.grillaert.y1033@student.hogent.be", "+32474139526", new Date());

us.addChallenge(new Challenge(0,"Titel", "Eerste challenge",new Category(1,"Categorie")))
us.addChallenge(new Challenge(0,"Titel", "Eerste challenge",new Category(1,"Categorie")))
us.addChallenge(new Challenge(0,"Titel", "Eerste challenge",new Category(1,"Categorie")))
const er: NormalUser =  new NormalUser(1, "wazzaaaa97", "Ruben1", "Grillaert", "ruben.grillaert.y1033@student.hogent.be", "+32474139526", new Date());
er.addChallenge(new Challenge(0,"Titel", "Eerste challenge",new Category(1,"Categorie")))
er.addChallenge(new Challenge(0,"Titel", "Eerste challenge",new Category(1,"Categorie")))


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
    private router: Router,
    private selectUserService: SelectUserService
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
    this.selectUserService.setUser(user);
    this.router.navigate(['/gebruiker/id']);
  }

}
 