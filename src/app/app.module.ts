import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { BannerComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    BannerComponent,
    EducationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
