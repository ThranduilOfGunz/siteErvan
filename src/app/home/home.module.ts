import { HomeVoyageComponent } from './home-voyage/home-voyage.component';
import { HomePresentationComponent } from './home-presentation/home-presentation.component';
import { HomeCvComponent } from './home-cv/home-cv.component';
import { HomeComponent } from './home.component';
import { DialogComponent } from './../shared/components/modales/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule

  ],
  declarations: [DialogComponent, HomeComponent, HomeCvComponent, HomePresentationComponent, HomePresentationComponent,
     HomeVoyageComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule { }
