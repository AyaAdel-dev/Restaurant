import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/_module/signup';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm: FormGroup;
  user: Signup = new Signup();

  constructor(
    private formBuilder: FormBuilder,
    private signup: SignupService,
    private route: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        username: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: this.matchPassword("password", "confirmPassword"),
      }
    );
  }
  matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ matchPassword: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  get username() {
    return this.registerForm.get("username");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }
 

  onSubmit() {
    if (this.registerForm.valid) {
      this.user.Username = this.registerForm.get("username")?.value;
      this.user.Email = this.registerForm.get("email")?.value;
      this.user.Password = this.registerForm.get("password")?.value;
   
      console.log(this.user); // Log the user object
      this.signup.register(this.user).subscribe({
        next: (_response) => {
          this.route.navigateByUrl("/login");
        },
        error: (error) => {
          console.log("Register failed");
          alert("Register failed");
          console.log(error); // Log the error object
        },
      });
    } else {
      alert("Form data is invalid");
      // Form data is invalid, display error messages
      console.log("Form data is invalid");
    }
  }
}
