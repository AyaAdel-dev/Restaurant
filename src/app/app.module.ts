import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from "./homepage/homepage.module";
import { MenuModule } from './menu/menu.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { CartModule } from './cart/cart.module';
import { AboutUsModule } from './about-us/about-us.module';
import { HttpClientModule } from '@angular/common/http';
import { ShoworderdetailsModule } from './showorderdetails/showorderdetails.module';
import { ShowitemdetailsModule } from './showitemdetails/showitemdetails.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
      
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([]),
        AppRoutingModule,
        HomepageModule,
        MenuModule,
        SignupModule,
        LoginModule,
        CartModule,
        AboutUsModule,
        HttpClientModule,
        RouterModule,
        ShoworderdetailsModule,
        ShowitemdetailsModule
    ]
})
export class AppModule {}