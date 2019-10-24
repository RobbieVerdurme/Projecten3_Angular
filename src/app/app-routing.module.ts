//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './user/auth.guard';

//Component


const appRoutes:Routes = [
    //routes to mainpage,....
    { path: 'welkom', component: WelcomeComponent},
    { path: 'result', loadChildren: './result/result.module#ResultModule'},
    { path: 'overzicht', loadChildren: './userOverview/userOverview.module#UserOverviewModule'},
    { path: '', redirectTo: '/welkom', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
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
