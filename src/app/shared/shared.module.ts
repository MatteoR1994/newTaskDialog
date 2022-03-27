import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
