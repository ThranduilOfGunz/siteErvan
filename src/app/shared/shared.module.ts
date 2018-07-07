import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudeModel } from './models/etude.model';
import { DialogComponent } from './components/modales/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule { }
