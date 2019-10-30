import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { CompanyComponent } from './company/company.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {path: 'bedrijf/registreren', canActivate: [AuthGuard], component: RegisterCompanyComponent},
  {path: 'bedrijf/lijst', canActivate: [AuthGuard], component: CompanyListComponent},
  {path: 'bedrijf/id', canActivate: [AuthGuard], component: CompanyDetailComponent}
]

@NgModule({
  declarations: [
    RegisterCompanyComponent,
    CompanyComponent,
    CompanyDetailComponent,
    CompanyListComponent
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
