import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { SharedModule } from './shared/shared.module';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCard,
    MatCardModule,
    MatToolbarModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BlogVoyageComponent } from './blog-voyage/blog-voyage.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ButtonLogoComponent } from './shared/components/buttons/button-logo/button-logo.component';
import { ButtonMenuComponent } from './shared/components/buttons/button-menu/button-menu.component';
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import {MatTabsModule} from '@angular/material/tabs';
import { CvComponent } from './cv/cv.component';

@NgModule({
    declarations: [
        AppComponent,
        BannerComponent,
        EducationComponent,
        MenuComponent,
        FooterComponent,
        BlogVoyageComponent,
        HomeComponent,
        ButtonLogoComponent,
        ButtonMenuComponent,
        CvComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        AppRoutingModule,
        MatTabsModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase, 'ervan-site-web'),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule // imports firebase/storage only needed for storage features
    ],
    providers: [AngularFireDatabase],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
