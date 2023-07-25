import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/_module/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup;
  user: Login = new Login();
  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginform = this.formBuilder.group({
      username: [
        "",
        [Validators.required, Validators.minLength(3)],
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get username() {
    return this.loginform.get("username");
  }

  get password() {
    return this.loginform.get("password");
  }

  onSubmit() {
    if (this.loginform.valid) {
      this.user.Username = this.loginform.get("username")?.value;
      this.user.Password = this.loginform.get("password")?.value;

      this.loginService.login(this.user).subscribe({
        next: (response) => {
          console.log(response); // Log the response object
          if(response.role=="user"){
            localStorage.setItem('loggedInAsUser', 'true');
            localStorage.setItem('loggedInAsAdmin', 'false');
            this.router.navigateByUrl("/mainpage");

           
          }else{
            localStorage.setItem('loggedInAsUser', 'false');
            localStorage.setItem('loggedInAsAdmin', 'true');
            this.router.navigateByUrl("/mainpage");
          }
        },
        error: (error) => {
          this.loginError = 'Invalid username or password'; // Display error message
          console.log(error); // Log the error object
        },
      });
    } else {
      alert("Form data is invalid");
    }
  }
}