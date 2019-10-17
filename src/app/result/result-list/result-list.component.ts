import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../result';
import { ResultDataService } from '../result-data.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  //var
  public _fetchResults: Observable<Result[]> = this._resultDataService.results$;
  public loadingError$ = this._resultDataService.loadingError$;

  //ctor
  constructor(
    private _resultDataService: ResultDataService
    ) { }

  //methods
  ngOnInit() {
  }

  get results$(){
    return this._fetchResults
  }
}
