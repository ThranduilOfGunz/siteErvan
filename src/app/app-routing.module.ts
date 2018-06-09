import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BlogVoyageComponent } from './blog-voyage/blog-voyage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'blog-voyage', component: BlogVoyageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'job', component: EducationComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
