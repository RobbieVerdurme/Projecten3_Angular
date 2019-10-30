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
import { RegisterUserComponent } from './normal-user/register-normal-user/register-user.component';
import { RegisterTherapistComponent } from './register-therapist/register-therapist.component';
//auth
import { AuthGuard } from './auth.guard';
import { RegisterCompanyComponent } from '../company/register-company/register-company.component';

const routes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'gebruiker', canActivate:[AuthGuard], loadChildren: () => import(`./normal-user/normal-user.module`).then(m => m.NormalUserModule)},
  {path: 'registertherapist', canActivate:[AuthGuard], component: RegisterTherapistComponent},
  {path: 'profile', canActivate:[AuthGuard], component: ProfileComponent},
  {path: 'registercompany', canActivate:[AuthGuard], component: RegisterCompanyComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegisterTherapistComponent
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
