import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReminderService } from '../reminder/reminder.service';
import { Router } from '@angular/router';
import { Reminder } from '../model/reminder';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reminderinput',
  standalone: false,
  templateUrl: './reminderinput.component.html',
  styleUrl: './reminderinput.component.css'
})
export class ReminderinputComponent implements OnInit {

  reminderForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reminderService: ReminderService,
    private router: Router
  ){}

  ngOnInit(): void {
    console.log("Reminder Input Component Initialized");
      this.reminderForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required]
      });
  }

  onSubmit(){
    console.log("here");
    console.log('Form submitted:', this.reminderForm.value);
    if (this.reminderForm.valid) {
      let reminder: Reminder = this.reminderForm.value;
      this.reminderService.addReminder(reminder);
      console.log('Reminder added:', reminder);
      this.router.navigate(['/list']);
    } else {
      alert('Please fill in all fields correctly.');
    }
  }



}
