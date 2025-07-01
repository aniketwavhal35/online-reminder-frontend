import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../reminder/reminder.service';
import { Reminder } from '../model/reminder';

@Component({
  selector: 'app-reminderlist',
  standalone: false,
  templateUrl: './reminderlist.component.html',
  styleUrl: './reminderlist.component.css'
})
export class ReminderlistComponent implements OnInit {

  reminders: Reminder[] = [];

  constructor(private reminderService: ReminderService){}
  ngOnInit(): void {
    this.reminders = this.reminderService.getAllReminders();
  }

  deleteReminder(id: number): void {
    this.reminderService.deleteReminder(id);
    this.reminders = this.reminderService.getAllReminders();
  }

}
