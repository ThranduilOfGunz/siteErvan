import { CountdownModule } from 'ngx-countdown';
import { ParallaxModule } from 'ngx-parallax';
import { FooterComponent } from './../footer/footer.component';
import { HomeVoyageComponent } from './home-voyage/home-voyage.component';
import { HomePresentationComponent } from './home-presentation/home-presentation.component';
import { HomeCvComponent } from './home-cv/home-cv.component';
import { HomeComponent } from './home.component';
import { DialogComponent } from './../shared/components/modales/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { BlogVoyageComponent } from 'app/blog-voyage/blog-voyage.component';
import { MatGridListModule, MatIconModule,
    MatToolbarModule, MatCardModule, MatSelectModule, MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ParallaxModule,
    CountdownModule

  ],
  declarations: [DialogComponent, BlogVoyageComponent, HomeComponent, FooterComponent, HomeCvComponent, HomePresentationComponent,
     HomeVoyageComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule { }
