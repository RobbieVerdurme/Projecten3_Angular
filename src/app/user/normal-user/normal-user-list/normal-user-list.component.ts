import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NormalUser } from '../NormalUser';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatPaginator } from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { Challenge } from 'src/app/challenge/Challenge';
import { Company } from 'src/app/company/company';
import { Category } from 'src/app/challenge/Category';
import { SelectUserService } from 'src/app/challenge/select-user.service';
import { AuthenticationService } from '../../authentication.service';
import { Therapist } from '../../therapist/Therapist';
import { TherapistDataService } from '../../therapist/therapist-data.service';
import { Observable, Subject, of } from 'rxjs';
import { NormalUserDataService } from '../normal-user-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-normal-user-list',
  templateUrl: './normal-user-list.component.html',
  styleUrls: ['./normal-user-list.component.css']
})
export class NormalUserListComponent implements OnInit {
//var
  @Input() normalUsers: NormalUser[]
  displayedColumns: string[] = ['firstname', 'lastname', 'email'];
  dataSource: MatTableDataSource<NormalUser>;

  public filterNormalUser: string = '';
  public filterNormalUsers$ = new Subject<string>();
  public normalUsers$: Observable<NormalUser[]>;
  public errorMsg$: Subject<string> = new Subject<string>();
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //ctor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private aut: AuthenticationService, 
    private normalUserDataService: NormalUserDataService,
    private route: ActivatedRoute,
    private therapistDataService: TherapistDataService
    ) {}
  
  //methods
  ngOnInit() {
    this.loadData()
    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
        ['firstname', 'lastname'] : 
        ['firstname', 'lastname', 'email'];
    });
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
    this.dataSource = new MatTableDataSource()
    // check if current user is multimed or a therapist
    if(this.aut.isMultimed()){
      //Get all normal users  
      if(this.normalUsers == null){
        this.normalUserDataService.normalUsers$.subscribe(
          x=> {
            this.fillDataSource(x)
          }
        )
      }
      //Get users of given company
      else{
        this.fillDataSource(this.normalUsers)
      }
    }
    else{
      //Get therapist and display his clients
      var therapist = <Therapist>this.aut.user$.value
      this.therapistDataService.getTherapistClients(therapist.id).subscribe(
        response =>
      {
        if(response.status === 200)
        {
          this.fillDataSource(response.body.map((client: any) : NormalUser => NormalUser.FromJSON(client)));
        }
        else
        {
          this.errorMsg$.next("Er liep iets fout, de challenges van de user konden niet opgehaald worden.");
        }
      },
      (err: HttpErrorResponse) => {
        this.errorMsg$.next(`Er zijn geen cliënten gevonden voor deze therapeut.`);
      }
    );

      //this.normalUsers$ = this.therapistDataService.getTherapistClients$(1);
      //This is used to get therapist clients from backend
      /*
      var therapist: Therapist = null
      this.therapistDataService.getTherapist$(this.aut.idFromToken).subscribe(item => therapist = item['therapist'])
      this.dataSource = new MatTableDataSource(therapist.clients)
      */
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fillDataSource(users: Array<NormalUser>){
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
 