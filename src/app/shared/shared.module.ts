import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudeModel } from './models/etude.model';
import { DialogComponent } from './components/modales/dialog/dialog.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatToolbarModule } from '@angular/material';

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
  declarations: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule { }
