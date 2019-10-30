import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
//Defining the different paths
const routes = [
  {path: 'list', component: CompanyListComponent},
  //create resolver to get by id and modify path
  {path: '1', component: CompanyDetailComponent}
]

@NgModule({
  declarations: [CompanyListComponent, CompanyDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyOverviewModule { }
