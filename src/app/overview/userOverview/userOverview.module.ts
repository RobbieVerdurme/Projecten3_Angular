import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes = [
  { path: 'list', component: UserListComponent},
  //create resolver to get by id and modify path
  { path: '1', component: UserDetailComponent},
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserListComponent,
    UserDetailComponent
  ]
})
export class UserOverviewModule { }
