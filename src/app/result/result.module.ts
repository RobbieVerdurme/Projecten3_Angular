import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultMultimedComponent } from './result-multimed/result-multimed.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const routes = [
  { path: 'multimed', component: ResultMultimedComponent},
]

@NgModule({
  declarations: [
    ResultMultimedComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ResultModule { }
