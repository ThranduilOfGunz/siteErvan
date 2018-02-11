import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MatInputModule, MatButtonModule, MatSelectModule,
    MatIconModule, MatCard, MatCardModule, MatToolbarModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        BannerComponent,
        EducationComponent,
        MenuComponent,
        FooterComponent
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
        MatIconModule
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
