import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalUserListComponent } from './normal-user-list/normal-user-list.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { RegisterUserComponent } from './register-normal-user/register-user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { NormalUserDetailComponent } from './normal-user-detail/normal-user-detail.component';
import { NormalUserResolver } from './normal-user-resolver';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {path: 'registreren', canActivate:[AuthGuard], component: RegisterUserComponent},
  {path: 'lijst', canActivate:[AuthGuard], component: NormalUserListComponent},
  {path: ':id', canActivate:[AuthGuard], component: NormalUserDetailComponent, resolve: {user: NormalUserResolver}},
  {path: 'edit/:id', canActivate: [AuthGuard], component: RegisterUserComponent, resolve: { user: NormalUserResolver} }
]

@NgModule({
  declarations: [
    RegisterUserComponent,
    NormalUserComponent,
    NormalUserDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NormalUserModule { }