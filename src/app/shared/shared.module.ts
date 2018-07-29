import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudeModel } from './models/etude.model';
import { DialogComponent } from './components/modales/dialog/dialog.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule
  ],
  declarations: [DialogComponent, SnackBarComponent],
  entryComponents: [DialogComponent, SnackBarComponent]
})
export class SharedModule { }
