import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomepageModule } from "../homepage/homepage.module";
// import { FooterComponent } from '../homepage/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SignupComponent,
      
    ],
    imports: [
        CommonModule,
        HomepageModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        SignupComponent
    ]
})
export class SignupModule { }
