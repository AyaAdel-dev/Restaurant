import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authorized } from 'src/app/_module/authorized';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public authorized: Authorized = new Authorized("", false);

  constructor(private authService: LoginService,private router: Router) {}
  ngOnInit(): void {
    this.authService.isAuth$.subscribe((value) => {
      this.authorized.Role = value.Role;
      this.authorized.isAuthorized = value.isAuthorized;
    });
    this.checkIfUserLoggedIn();
  }
  checkIfUserLoggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("role")) {
      this.authorized.isAuthorized = true;
      this.authorized.Role = localStorage.getItem("role");

      this.authService.isAuth$.next(this.authorized);
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/mainpage");
  }
}
