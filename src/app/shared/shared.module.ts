import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSnackBarModule,
        ReactiveFormsModule,

    ],
})
export class SharedModule { }
