import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatCardModule, MatInputModule, MatButtonModule, MatSortModule, MatPaginatorModule,MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { UserListComponent } from '../overview/userOverview/user-list/user-list.component';
import { UserDetailComponent } from '../overview/userOverview/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
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
    MatIconModule
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
    UserListComponent,
    UserDetailComponent,
  ]
})
export class MaterialModule { }
