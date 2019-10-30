import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';

//Defining the different paths
const routes = [
    { path: 'therapist', canActivate:[AuthGuard], loadChildren: './therapistOverview/therapistOverview.module#TherapistOverviewModule'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OverviewModule { }
