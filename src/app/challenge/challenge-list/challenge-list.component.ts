import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Challenge } from '../Challenge';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Category } from '../Category';
import { Observable, Subject, of } from 'rxjs';
import { ChallengeService } from '../challenge.service';
import { NormalUser } from 'src/app/user/normal-user/NormalUser';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  @Input() user: NormalUser;

  displayedColumns: string[] = ['description']
  dataSource: MatTableDataSource<Challenge>;

  public challenges$: Observable<Challenge[]>;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
    constructor(
      private breakpointObserver: BreakpointObserver,
      private challengeDataService: ChallengeService
      ) 
      { }
  
    ngOnInit() {
      this.loadData();
      this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
          this.displayedColumns = result.matches ? 
          ['description'] : 
          ['description'];
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

    loadData(){
      this.dataSource = new MatTableDataSource();

      this.challenges$ = this.challengeDataService.getChallengesForUser$(this.user.id)
    }

}
