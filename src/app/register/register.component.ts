import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
          this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required],
      });
  }

  onSubmit() {
    // Handle login logic here
    if(this.registerForm.valid) {
      let user: User = this.registerForm.value;
    console.log('Login form submitted');

  }
}

}
