import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageModule } from "../homepage/homepage.module";



@NgModule({
    declarations: [
        AboutUsComponent
    ],
    imports: [
        CommonModule,
        HomepageModule
    ]
})
export class AboutUsModule { }
