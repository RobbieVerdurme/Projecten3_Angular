import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Challenge } from '../Challenge';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Category } from '../Category';

var data : Challenge[] = [];
data.push(new Challenge(0, "Loop 10km","Loop een afstand van 10 kilometer",new Category(1,"Sport")));
data.push(new Challenge(0,"Speciale Maaltijd", "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
data.push(new Challenge(0,"Daguitstap", "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
data.push(new Challenge(0, "Loop 10km","Loop een afstand van 10 kilometer",new Category(1,"Sport")));
data.push(new Challenge(0,"Speciale Maaltijd", "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
data.push(new Challenge(0,"Daguitstap", "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
data.push(new Challenge(0, "Loop 10km","Loop een afstand van 10 kilometer",new Category(1,"Sport")));
data.push(new Challenge(0,"Speciale Maaltijd", "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
data.push(new Challenge(0,"Daguitstap", "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));
data.push(new Challenge(0, "Loop 10km","Loop een afstand van 10 kilometer",new Category(1,"Sport")));
data.push(new Challenge(0,"Speciale Maaltijd", "Maak een speciale gezonde maaltijd",new Category(2,"Eten")));
data.push(new Challenge(0,"Daguitstap", "Doe een daguitstap en neem eigen middagmaal mee",new Category(3,"Recreatie")));

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  @Input() challenges: Challenge[] = data;

  displayedColumns: string[] = ['description']
  dataSource: MatTableDataSource<Challenge>;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
    constructor(breakpointObserver: BreakpointObserver,) { 
      this.dataSource = new MatTableDataSource(this.challenges); 
      breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
        this.displayedColumns = result.matches ? 
          ['description'] : 
          ['description'];
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
