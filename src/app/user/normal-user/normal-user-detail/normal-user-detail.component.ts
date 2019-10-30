import { Component, OnInit } from '@angular/core';

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
  selector: 'app-normal-user-detail',
  templateUrl: './normal-user-detail.component.html',
  styleUrls: ['./normal-user-detail.component.css']
})
export class NormalUserDetailComponent implements OnInit {
//var
displayedColumns = ['challengename'];
dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
