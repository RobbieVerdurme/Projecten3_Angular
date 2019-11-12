import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatCardModule, MatInputModule, MatButtonModule, MatSortModule, MatPaginatorModule,MatIconModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { NormalUserListComponent } from '../user/normal-user/normal-user-list/normal-user-list.component';

@NgModule({
  declarations: [
    NormalUserListComponent
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
    MatNativeDateModule
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
    NormalUserListComponent
  ]
})
export class MaterialModule { }
