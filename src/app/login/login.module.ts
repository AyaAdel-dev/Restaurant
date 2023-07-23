import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomepageModule } from "../homepage/homepage.module";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        HomepageModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class LoginModule { }
