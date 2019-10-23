import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './result-list/result-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ResultDetailComponent } from './result-detail/result-detail.component';

const routes = [
  { path: 'list', component: ResultListComponent},
  { path: '1', component: ResultDetailComponent},
]

@NgModule({
  declarations: [
    ResultListComponent,
    ResultDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ResultModule { }
