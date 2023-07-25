import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowitemdetailsComponent } from './showitemdetails/showitemdetails.component';
import { HomepageModule } from "../homepage/homepage.module";



@NgModule({
    declarations: [
        ShowitemdetailsComponent
    ],
    imports: [
        CommonModule,
        HomepageModule
    ]
})
export class ShowitemdetailsModule { }
