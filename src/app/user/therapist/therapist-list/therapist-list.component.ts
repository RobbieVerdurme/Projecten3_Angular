import { Component, OnInit, ViewChild } from '@angular/core';
import { Therapist } from '../Therapist';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TherapistDataService } from '../therapist-data.service';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.css']
})
export class TherapistListComponent implements OnInit {

  //var
  displayedColumns: string[] = ['firstname', 'familyname', 'email', 'telephone', 'function'];
  dataSource: MatTableDataSource<Therapist>;
  private therapists$ = this.therapistDataService.therapists$

  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //ctor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private therapistDataService: TherapistDataService
    ){}
        

  

  ngOnInit(){
    this.dataSource = new MatTableDataSource(); 


    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
        ['firstname', 'lastname'] : 
        ['firstname', 'lastname', 'email', 'telephone', 'function'];

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
  detailscreen(therapist: Therapist){;
    this.router.navigate([`/therapeut/${therapist.id}`])
  }

 // async loadData(){
      //Get all the therapists
  //    this.dataSource = new MatTableDataSource();
     // this.therapists$ = this.therapistDataService.therapists$;

 

}
