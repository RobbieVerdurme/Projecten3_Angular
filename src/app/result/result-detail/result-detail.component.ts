import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {
  //Var
  @Input() public result:Result

  //ctor
  constructor() { }

  //methods
  ngOnInit() {
  }

}
