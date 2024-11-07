import {Component, inject} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from "../../services/auth/auth.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserInterface} from "../../interface/UserInterface";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  private AuthService = inject(AuthService);
  readonly form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })


  get email() {
    return this.form.get('username') as FormControl;

  }

  get password() {
    return this.form.get('password') as FormControl;
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const login:UserInterface = {
      username:this.email.value,
      password:this.password.value
    }

    this.AuthService.login(login).subscribe((r) => {
    });

  }
}
