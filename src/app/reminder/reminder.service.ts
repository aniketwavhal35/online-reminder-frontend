import { Injectable } from '@angular/core';
import { Reminder } from '../model/reminder';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  reminders: Reminder[] = [];

  private url = 'http:localhost:8080/reminder/user'



  constructor(
    private http: HttpClient
  ) { }

  addReminder(reminder: Reminder): void{
    this.reminders.push(reminder);
  }

  deleteReminder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
    
  }

  getAllReminders(): Reminder[] {
    return this.reminders;
  }

  getRemindersByUser(userId: number): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.url}/${userId}`);
  }



  
}
