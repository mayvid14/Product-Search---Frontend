import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MatModule { }
