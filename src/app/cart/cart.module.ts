import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CarttableComponent } from './carttable/carttable.component';

import { HomepageModule } from "../homepage/homepage.module";
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        CartComponent,
        CarttableComponent,
     
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomepageModule,
        RouterModule
    ]
})
export class CartModule { }