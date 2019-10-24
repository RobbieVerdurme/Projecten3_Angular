import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

export interface PeriodicElement {
  challengename: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {challengename: 'Loop 10 kilometer'},
  {challengename: 'Eet een gezonde maaltijd'},
  {challengename: 'Fiets naar het werk'},
  {challengename: 'Ga naar de fitness'}
];

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
//var
displayedColumns = ['challengename'];
dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
