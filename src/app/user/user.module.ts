//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Material
import { MaterialModule } from '../material/material.module';
//Component
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
//auth
import { AuthGuard } from './auth.guard';

const routes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'gebruiker', canActivate:[AuthGuard], loadChildren: () => import(`./normal-user/normal-user.module`).then(m => m.NormalUserModule)},
  {path: 'therapeut', canActivate:[AuthGuard], loadChildren: () => import(`./therapist/therapist.module`).then(m => m.TherapistModule)},
  {path: 'profile', canActivate:[AuthGuard], component: ProfileComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
