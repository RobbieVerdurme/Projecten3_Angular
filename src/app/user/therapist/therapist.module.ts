import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth.guard';
import { RegisterTherapistComponent } from './register-therapist/register-therapist.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { TherapistDetailComponent } from './therapist-detail/therapist-detail.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TherapistComponent } from './therapist/therapist.component';
import { OpeningTimesComponent } from './opening-times/opening-times.component';

const routes = [
  {path: 'registreren', canActivate:[AuthGuard], component: RegisterTherapistComponent},
  {path: 'lijst', canActivate:[AuthGuard], component: TherapistListComponent},
  {path: 'id', canActivate:[AuthGuard], component: TherapistDetailComponent}
]

@NgModule({
  declarations: [
    TherapistComponent,
    RegisterTherapistComponent,
    TherapistListComponent,
    TherapistDetailComponent,
    OpeningTimesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TherapistModule { }
