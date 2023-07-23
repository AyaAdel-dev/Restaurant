import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenulistComponent } from './menulist/menulist.component';
import { HomepageModule } from "../homepage/homepage.module";



@NgModule({
    declarations: [
        MenuComponent,
        MenulistComponent
    ],
    imports: [
        CommonModule,
        HomepageModule
    ]
})
export class MenuModule { }
