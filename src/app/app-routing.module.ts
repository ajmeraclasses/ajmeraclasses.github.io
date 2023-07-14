import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';
import { VedicMathsComponent } from './vedic-maths/vedic-maths.component';
import { ArtHouseComponent } from './art-house/art-house.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'our-courses', component: OurCoursesComponent },
  { path: 'vedic-maths', component: VedicMathsComponent },
  { path: 'art-house', component: ArtHouseComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
