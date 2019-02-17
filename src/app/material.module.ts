import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule
    ]
})
export class MaterialModule {
}
