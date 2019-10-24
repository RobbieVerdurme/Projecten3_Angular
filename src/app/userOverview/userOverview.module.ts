import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes = [
  { path: 'list', component: UserListComponent},
  { path: '1', component: UserDetailComponent},
]

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class UserOverviewModule { }
