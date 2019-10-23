import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatCardModule, MatInputModule, MatButtonModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class MaterialModule { }
