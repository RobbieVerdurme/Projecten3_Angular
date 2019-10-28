import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { CompanyComponent } from './company/company.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  {path: 'registercompany', canActivate: [AuthGuard], component: RegisterCompanyComponent}
]

@NgModule({
  declarations: [
    RegisterCompanyComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyModule { }
