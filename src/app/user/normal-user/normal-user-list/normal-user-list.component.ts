import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NormalUser } from '../NormalUser';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatPaginator } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/challenge/Challenge';
import { Company } from 'src/app/company/company';
import { Category } from 'src/app/challenge/Category';
import { SelectUserService } from 'src/app/challenge/select-user.service';
import { AuthenticationService } from '../../authentication.service';
import { Therapist } from '../../therapist/Therapist';
import { TherapistDataService } from '../../therapist/therapist-data.service';
import { Observable } from 'rxjs';
import { NormalUserDataService } from '../normal-user-data.service';

@Component({
  selector: 'app-normal-user-list',
  templateUrl: './normal-user-list.component.html',
  styleUrls: ['./normal-user-list.component.css']
})
export class NormalUserListComponent implements OnInit {
//var
  @Input() company: Company
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'challenges'];
  dataSource: MatTableDataSource<NormalUser>;
  private normalUsers$: Observable<NormalUser[]>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //ctor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private aut: AuthenticationService, 
    private normalUserDataService: NormalUserDataService
    ) {}
  
  //methods
  ngOnInit() {
    this.loadData()

    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
        ['firstname', 'lastname'] : 
        ['firstname', 'lastname', 'email', 'challenges'];
    });

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
    this.router.navigate([`/gebruiker/${user.id}`]);
  }

  async loadData(){
    // check if current user is multimed or a therapist
    if(this.aut.isMultimed()){
      //Get all normal users  
      if(this.company == null){
        this.dataSource = new MatTableDataSource();
        this.normalUsers$ = this.normalUserDataService.normalUsers$
      }
      //Get users of given company
      else{
        this.dataSource = new MatTableDataSource(this.company.companyMembers); 
      }
    }
    else{
      //Get therapist and display his clients
      this.dataSource = new MatTableDataSource()
      //This is used to get therapist clients from backend
      /*
      var therapist: Therapist = null
      this.therapistDataService.getTherapist$(this.aut.idFromToken).subscribe(item => therapist = item['therapist'])
      this.dataSource = new MatTableDataSource(therapist.clients)
      */
    }
  }

}
 