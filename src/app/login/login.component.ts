import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  loginForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]});
  }

  onSubmit() {
    // Handle login logic here
    if(this.loginForm.valid) {
      let user: User = this.loginForm.value;
    console.log('Login form submitted');

  }
}

}
