import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { RouterModule } from '@angular/router';
import { MainLandingContentComponent } from './main-landing-content/main-landing-content.component';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    StartpageComponent,
    MainLandingContentComponent,
    AdminscreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
   
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    StartpageComponent
  ]
})
export class HomepageModule { }