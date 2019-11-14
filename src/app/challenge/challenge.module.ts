import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge/challenge.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { AssignChallengeComponent } from './assign-challenge/assign-challenge.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: 'add', component: AddChallengeComponent},
  {path: 'assign', component: AssignChallengeComponent},
  {path: '', pathMatch: 'full', redirectTo: '/welkom'},
];

@NgModule({
  declarations: [ChallengeComponent, AddChallengeComponent, AssignChallengeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ChallengeModule { }