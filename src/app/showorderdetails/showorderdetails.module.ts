import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoworderdetailsComponent } from './showorderdetails/showorderdetails.component';
import { HomepageModule } from '../homepage/homepage.module';


@NgModule({
  declarations: [
    ShoworderdetailsComponent
  ],
  imports: [
    CommonModule,
    HomepageModule
  ]
})
export class ShoworderdetailsModule { }
