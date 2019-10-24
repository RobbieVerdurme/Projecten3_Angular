import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';

const routes = [
    { path: 'user', canActivate:[AuthGuard], loadChildren: './userOverview/userOverview.module#UserOverviewModule'},
    { path: 'therapist', canActivate:[AuthGuard], loadChildren: './therapistOverview/therapistOverview.module#TherapistOverviewModule'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OverviewModule { }
