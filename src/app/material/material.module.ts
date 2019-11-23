import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material

import {MatCardModule, MatInputModule, MatButtonModule, MatSortModule, MatPaginatorModule,MatIconModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatProgressSpinnerModule, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { NormalUserListComponent } from '../user/normal-user/normal-user-list/normal-user-list.component';
import { ChallengeListComponent } from '../challenge/challenge-list/challenge-list.component';

@NgModule({
  declarations: [
    NormalUserListComponent,
    ChallengeListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    NormalUserListComponent,
    ChallengeListComponent,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
