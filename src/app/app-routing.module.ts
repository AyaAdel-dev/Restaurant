import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { MainLandingContentComponent } from './homepage/main-landing-content/main-landing-content.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { MenuComponent } from './menu/menu/menu.component';
import { CartComponent } from './cart/cart/cart.component';
import { StartpageComponent } from './homepage/startpage/startpage.component';
import { AdminscreenComponent } from './homepage/adminscreen/adminscreen.component';
import { userGuard } from './guards/user.guard';
import { adminGuard } from './guards/admin.guard';
import { ShoworderdetailsComponent } from './showorderdetails/showorderdetails/showorderdetails.component';
import { ShowitemdetailsComponent } from './showitemdetails/showitemdetails/showitemdetails.component';
const routes: Routes = [
 { path: "",
    redirectTo: "mainpage",
    pathMatch: "full",
  },
  {
    path: "mainpage",
    component: MainLandingContentComponent,
  },
  {
    path: "cart",
    canActivate: [userGuard],
    component: CartComponent,
  },
  {
    path: "showitem/:id",
    canActivate: [userGuard],
    component: ShowitemdetailsComponent,
  },
  {
    path: "startpage",
    canActivate: [userGuard],
    component: StartpageComponent,
  },
  {
    path: "adminscreen",
    canActivate: [adminGuard],
    component: AdminscreenComponent,
  },
  {
    path:'showOrder/:id',
    canActivate: [adminGuard],
    component: ShoworderdetailsComponent,
  },
  {
    path: "login",
  component: LoginComponent,
  },
  {
    path: "menu",
    canActivate: [userGuard],
  component: MenuComponent,
  },
  {
    path: "aboutUs",
  canActivate: [userGuard],
  component: AboutUsComponent,
  },
  {
    path: "signup",
  component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
