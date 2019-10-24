import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { TherapistDetailComponent } from './therapist-detail/therapist-detail.component';

const routes = [
  { path: 'list', component: TherapistListComponent},
  { path: '1', component: TherapistDetailComponent},
]

@NgModule({
  declarations: [
      TherapistListComponent,
      TherapistDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class TherapistOverviewModule { }

