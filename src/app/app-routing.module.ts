//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultMultimedComponent } from './result/result-multimed/result-multimed.component';

//Component


const appRoutes:Routes = [
    //routes to mainpage,....
    { path: 'result', loadChildren: './result/result.module#ResultModule', data: {preload: true}},
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
