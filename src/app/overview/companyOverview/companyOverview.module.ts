import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';

//Defining the different paths
const routes = [
  {path: 'list', component: CompanyListComponent}
]

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyOverviewModule { }
