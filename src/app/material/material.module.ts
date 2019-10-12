import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatCardModule, MatInputModule, MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
